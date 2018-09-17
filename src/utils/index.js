const getLogger = require('./logger')
const generateText = require('./generateText')
const formatError = require('./formatError')
const documents = require('./documents')
const validateCpf = require('./cpf-validation')

module.exports = {
  getLogger,
  generateText,
  formatError,
  documents,
  validateCpf,
}
