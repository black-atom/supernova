const route = require('express').Router()
const unprotectedRoutes = require('./unprotected')
const protectedRoutes = require('./protected')

route.use('/api', protectedRoutes)
route.use('/', unprotectedRoutes)

module.exports = route
