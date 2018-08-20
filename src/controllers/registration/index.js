const database = require('../../database')

const {
  company: Company,
  user: User,
} = database.models

const registration = async (req, res, next) => {
  const company = req.body

  const companyWithUser = {
    ...company,
    users: [company.user],
  }

  const trasanction = await database.transaction()
  try {
    const createdCompany = await Company
      .create(companyWithUser, {
        include: [User],
        trasanction,
      })
  
    const [createdUser] = createdCompany.users
    createdCompany.primaryUserId = createdUser.id

    // const updatedCompany = await createdCompany.save({ trasanction })

    await trasanction.commit()
    res.status(200).json(createdCompany)
  } catch (error) {
    trasanction.rollback()
    next(error)
  }
}

module.exports = registration
