const route = require('express').Router()
const unprotectedRoutes = require('./unprotected')

route.use('/', unprotectedRoutes)

module.exports = route
