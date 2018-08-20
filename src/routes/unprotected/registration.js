const route = require('express').Router()
const validate = require('express-validation')
const registration = require('../../controllers/registration')
const registrationValidation = require('../../controllers/registration/validation')

route.post('/registration', validate(registrationValidation), registration)

module.exports = route
