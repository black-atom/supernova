const database = require('../../database')

const {
  company: Company,
} = database.models

const createCompany = (company, options = {}) => {
  const {
    transaction,
  } = options
  return Company.create(company, { transaction })
}

module.exports = createCompany
