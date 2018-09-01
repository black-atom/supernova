const route = require('express').Router()
const validate = require('express-validation')
const company = require('../../controllers/company')
const registrationValidation = require('../../validations/company/registration')

route.post('/registration', validate(registrationValidation), company.registration)
route.post('/temporary', company.temporary)

module.exports = route
