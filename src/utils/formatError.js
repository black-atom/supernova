const R = require('ramda')
const { UniqueConstraintError } = require('sequelize')


const UniqueConstraintErrorFormatter = R.applySpec({
  field: R.propOr(null, 'path'),
  message: R.propOr('must be unique', 'message'),
  type: () => 'unique_violation',
})

const validationErrorFormatter = R.applySpec({
  field: R.pipe(
    R.propOr([], 'field'),
    R.join('.'),
  ),
  message: R.propOr('required', 'message'),
  type: () => 'required',
})

const getError = (
  status = 500,
  name = 'Internal Error',
  formatter,
) => R.applySpec({
  status: R.propOr(status, 'status'),
  name: () => name,
  erros: R.pipe(
    R.propOr([], 'errors'),
    R.map(formatter),
  ),
})

const formatErrorResponse = (err) => {
  if (err instanceof UniqueConstraintError) {
    return getError(409, 'unique_constraint', UniqueConstraintErrorFormatter)(err)
  }

  if (err.message === 'validation error') {
    return getError(422, 'validation_error', validationErrorFormatter)(err)
  }

  return getError()(err)
}

module.exports = formatErrorResponse
