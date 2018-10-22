const database = require('../../database')
const customerService = require('../../services/customer')

const add = async (req, res, next) => {
  const transaction = await database.transaction()
  try {
    const options = {
      transaction,
      companyId: req.context.company.id,
    }

    const customer = await customerService.add(req.body, options)

    await transaction.commit()

    res.status(200).json(customer)
  } catch (error) {
    await transaction.rollback()
    next(error)
  }
}

module.exports = {
  add,
}
