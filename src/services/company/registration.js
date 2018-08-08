const UserService = require('../user')
const createCompany = require('./create')

const companyRegistration = async (company, user, options) => {
  const { trasaction } = options

  const newCompany = await createCompany(company, { trasaction })
  const newUser = await UserService.create({ ...user, company_id: newCompany.id })

  newCompany.primary_user_id = newUser.id
  await newCompany.save({ trasaction })

  return newCompany
}

module.exports = companyRegistration
