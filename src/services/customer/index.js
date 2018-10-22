const database = require('../../database')

const {
  customer: Customer,
  address: Address,
  contact: Contact,
  customer_pj: CustomerPJ,
  customer_pf: CustomerPF,
} = database.models

/**
 * Add a new customer with the given data
 * @param {*} customerData customer data
 * @param {*} options object that may contain the transantion and extra params
 */
const add = async (customerData, options) => {
  const {
    companyId,
    transaction,
  } = options

  const createdCustomer = await Customer.create({
    ...customerData,
    companyId,
  }, {
    transaction,
    include: [
      Address,
      Contact,
      CustomerPF,
      CustomerPJ,
    ],
  })

  return createdCustomer.get({ plain: true })
}

module.exports = {
  add,
}
