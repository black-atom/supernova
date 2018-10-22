const route = require('express').Router()
const validate = require('express-validation')
const { customer } = require('./../../controllers')
const registrationValidation = require('../../infra/validations/customer/registration')

route.post('/customer', validate(registrationValidation), customer.add)

module.exports = route
