const route = require('express').Router()
const { product } = require('./../../controllers')

const root = '/products'

route.post(root, product.create)
route.get(root, product.show)
route.get(`${root}/:id`, product.show)
route.put(`${root}/:id`, product.update)
route.patch(`${root}/:id`, product.update)
route.delete(`${root}/:id`, product.remove)

module.exports = route
