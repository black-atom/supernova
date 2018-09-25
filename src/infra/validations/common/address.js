const Joi = require('joi')

module.exports = {
  street: Joi.string().max(50).min(3).required(),
  streetNumber: Joi.string().max(10).required(),
  neighborhood: Joi.string().max(50).required(),
  complement: Joi.string().max(80).required(),
  city: Joi.string().max(100).required(),
  state: Joi.string().max(20).required(),
  zipcode: Joi.string().max(10).required(),
  country: Joi.string().default('BR').max(20).required(),
}
