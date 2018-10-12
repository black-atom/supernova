const show = (req, res, next) => {
  try {
    res.json({})
  } catch (error) {
    next(error)
  }
}

module.exports = show
