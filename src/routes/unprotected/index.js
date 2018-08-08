const route = require('express').Router()
const { registration } = require('../../controllers')

route.post('/registration', registration)

module.exports = route
