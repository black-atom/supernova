const { UnauthorizedError } = require('../../infra/errors')
const database = require('../../database')

const {
  company: Company,
  user: User,
  session: Session,
  role: Role,
} = database.models

const login = async (req, res, next) => {
  const { username, password, type } = req.body
  try {
    const user = await User.findOne({
      where: {
        email: username,
      },
      include: [Company],
    })

    if (!user || !user.company.active) {
      throw new UnauthorizedError()
    }

    const isPasswordCorrect = user.comparePassword(password)

    if (isPasswordCorrect) {
      const sessionIntance = Session.build({
        type,
        active: true,
        lastActivity: new Date(),
        userId: user.id,
        companyId: user.company.id,
      })

      await sessionIntance.save()
      await sessionIntance.reload({
        include: [{
          model: User,
          include: [{
            model: Role,
            attributes: ['name', 'id', 'type'],
            through: { attributes: [] },
          }],
        }, Company],
      })

      return res.status(200).json(sessionIntance)
    }

    throw new UnauthorizedError()
  } catch (error) {
    return next(error)
  }
}

module.exports = login
