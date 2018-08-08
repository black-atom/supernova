const database = require('../../database')

const {
  company: Company,
  user: User
} = database.models

const registration = async (req, res, next) => {
  const {
    company,
    user,
  } = req.body

  try {
    const companyWithUser = { ...company, users: [user] }
    const createdCompany = await Company
      .create(companyWithUser, {
        include: [User],
      })

    res.status(200).json(createdCompany)
  } catch (error) {
    next(error)
  }
}

module.exports = registration
