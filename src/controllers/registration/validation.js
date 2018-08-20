var Joi = require('joi');
 
module.exports = {
  body: {
    name: Joi.string().max(200).min(3).required(),
    documentId: Joi.string().max(20).required(),
    documentType: Joi.valid('cpf', 'cnpj').required(),
    email: Joi.string().email(),
    primaryUser: {
      name: Joi.string().max(200).min(3).required(),
      documentId: Joi.string().max(20).required(),
      documentType: Joi.valid('cpf', 'rg').required(),
      email: Joi.string().email().required(),
      password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
    }
  }
};