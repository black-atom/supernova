const route = require('express').Router()
const {
  contract,
  customer,
  product,
  registration,
} = require('../../controllers')

route.post('/registration', registration)
route.post('/contract', contract)
route.post('/customer', customer)
route.post('/product', product)

module.exports = route
