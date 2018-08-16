require('dotenv').config({ path: process.env.DOTENV_PATH })

const databaseConfigObj = {
  production: {
    host: '127.0.0.1',
    port: 5432,
    database: 'development',
    username: 'alexandre',
    password: '123456',
    logging: console.log,
    dialect: 'postgres',
  },
  development: {
    host: '127.0.0.1',
    port: 5432,
    database: 'development',
    username: process.env.DB_USERNAME,
    password: '123456',
    logging: console.log,
    dialect: 'postgres',
  },
  test: {
    host: '127.0.0.1',
    port: 5432,
    database: 'development',
    username: 'alexandre',
    password: '123456',
    logging: console.log,
    dialect: 'postgres',
  },
}

module.exports = databaseConfigObj
