const create = (req, res, next) => {
  try {
    res.json({})
  } catch (error) {
    next(error)
  }
}

module.exports = create
