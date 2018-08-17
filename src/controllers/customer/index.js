const database = require('../../database')

const {
  address: Address,
  contact: Contact,
  customer: Customer,
} = database.models

const registration = async (req, res, next) => {
  const {
    body: customer,
  } = req

  try {
    const createdCustomer = await Customer.create(customer, {
      include: [Address, Contact],
    })
    res.status(200).json(createdCustomer)
  } catch (error) {
    next(error)
  }
}

module.exports = registration
