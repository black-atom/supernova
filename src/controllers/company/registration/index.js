const database = require('../../../database')

const {
  company: Company,
  user: User,
  role: Role,
} = database.models

const registration = async (req, res, next) => {
  const requestBody = req.body

  const transaction = await database.transaction()
  try {
    const company = requestBody
    const primaryUser = requestBody.user

    const adminRole = await Role.findOne({
      where: {
        type: 'admin',
      },
      transaction,
      raw: true,
    })

    const userIntance = User.build(primaryUser)

    const createdCompany = await Company
      .create(company, { transaction })

    userIntance.companyId = createdCompany.id
    userIntance.addRole(adminRole.id, { transaction })

    createdCompany.primaryUserId = userIntance.id

    await userIntance.save({ transaction })
    await createdCompany.save({ transaction })
    await createdCompany.reload({
      transaction,
      include: [{
        model: User,
        as: 'primaryUser',
        include: [Role],
      }],
    })

    await transaction.commit()
    res.status(200).json(createdCompany)
  } catch (error) {
    transaction.rollback()
    next(error)
  }
}

module.exports = registration
