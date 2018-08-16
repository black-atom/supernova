require('dotenv').config({ path: process.env.DOTENV_PATH })

const databaseConfigObj = {
  production: {
    host: '127.0.0.1',
    port: 5432,
    database: 'development',
    username: 'alexandre',
    password: '123456',
    logging: false,
    dialect: 'postgres',
  },
  development: {
    host: '127.0.0.1',
    port: 5432,
    database: 'development',
    username: process.env.DB_USERNAME,
    password: '123456',
    logging: false,
    dialect: 'postgres',
  },
  test: {
    host: '127.0.0.1',
    port: 5432,
    database: 'development',
    username: 'alexandre',
    password: '123456',
    logging: false,
    dialect: 'postgres',
  },
}

module.exports = databaseConfigObj
