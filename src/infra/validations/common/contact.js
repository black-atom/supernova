const Joi = require('joi')

module.exports = {
  name: Joi.string().max(20).min(3).required(),
  phone: Joi.string().max(20).required(),
  email: Joi.string().email(),
}
