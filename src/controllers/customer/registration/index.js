const database = require('../../../database')

const {
  customer: Customer,
  address: Address,
  contact: Contact,
  customer_pj: CustomerPJ,
  customer_pf: CustomerPF,
} = database.models

const registration = async (req, res, next) => {
  const transaction = await database.transaction()
  try {
    const createdCustomer = await Customer.create({
      ...req.body,
      companyId: req.context.company.id,
    }, {
      transaction,
      include: [
        Address,
        Contact,
        CustomerPF,
        CustomerPJ,
      ],
    })
    await transaction.commit()
    res.json(createdCustomer)
  } catch (error) {
    await transaction.rollback()
    next(error)
  }
}

module.exports = registration
