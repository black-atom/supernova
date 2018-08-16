const database = require('../../database')

const {
  contract: Contract,
} = database.models

const registration = async (req, res, next) => {
  const {
    body: contract,
  } = req

  try {
    const createdContract = await Contract.create(contract)
    res.status(200).json(createdContract)
  } catch (error) {
    next(error)
  }
}

module.exports = registration
