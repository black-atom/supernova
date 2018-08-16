const database = require('../../database')

const {
  address: Address,
  contact: Contact,
  contract: Contract,
  contract_product: ContractProduct,
} = database.models

const registration = async (req, res, next) => {
  const {
    body: contract,
  } = req

  try {
    const createdContract = await Contract.create(contract, {
      include: [Address, Contact, ContractProduct],
    })
    res.status(200).json(createdContract)
  } catch (error) {
    next(error)
  }
}

module.exports = registration
