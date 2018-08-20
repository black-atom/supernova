const route = require('express').Router()
const registration = require('./registration')

route.use(registration)


module.exports = route
