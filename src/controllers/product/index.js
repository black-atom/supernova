const database = require('../../database')

const {
  product: Product,
} = database.models

const registration = async (req, res, next) => {
  const {
    body: product,
  } = req

  try {
    const createdProduct = await Product
      .create(product)
    res.status(200).json(createdProduct)
  } catch (error) {
    next(error)
  }
}

module.exports = registration
