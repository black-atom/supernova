const database = require('../../src/database')

module.exports = database.sync({ force: true })
