const { companyService } = require('../../services')
const database = require('../../database')

const registration = async (req, res, next) => {
  const {
    company,
    user,
  } = req.body

  const transaction = await database.transaction()
  try {
    const newCompany = await companyService.registration(company, user, { transaction })
    res.json(newCompany)
  } catch (error) {
    transaction.rollback()
    next(error)
  }
}

module.exports = registration
