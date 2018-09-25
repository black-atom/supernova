const Joi = require('joi')
const {
  address,
  contact,
} = require('../common')

module.exports = {
  body: {
    name: Joi.string().max(200).min(3).required(),
    email: Joi.string().email(),
    type: Joi.string().max(10).min(1).required(),
    active: Joi.boolean().default(true).required(),
    customer_pf: Joi.object({
      name: Joi.string().max(200).min(3).required(),
      rg: Joi.string().max(20).required(),
      cpf: Joi.string().max(20).required(),
      birthday: Joi.string().max(20).required(),
    }),
    contacts: Joi.array().items(contact),
    addresses: Joi.array().items(address),
  },
  options: {
    allowUnknownBody: false,
  },
}
