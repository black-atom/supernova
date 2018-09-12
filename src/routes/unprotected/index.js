const route = require('express').Router()
const validate = require('express-validation')
const company = require('../../controllers/company')
const session = require('../../controllers/session')
const status = require('../../controllers/status')
const registrationValidation = require('../../infra/validations/company/registration')

route.post('/registration', validate(registrationValidation), company.registration)
route.post('/temporary', company.temporary)
route.post('/login', session.login)
route.get('/status', status.index)

module.exports = route
