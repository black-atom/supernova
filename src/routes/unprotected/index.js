const route = require('express').Router()
const {
  contract,
  product,
  registration,
} = require('../../controllers')

route.post('/registration', registration)
route.post('/contract', contract)
route.post('/product', product)

module.exports = route
