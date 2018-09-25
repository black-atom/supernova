const route = require('express').Router()
const customer = require('./customer')
const user = require('./user')

route.use(customer)
route.use(user)

module.exports = route
