const update = (req, res, next) => {
  try {
    res.json({})
  } catch (error) {
    next(error)
  }
}

module.exports = update
