require('dotenv').config({ path: process.env.DOTENV_PATH });

const databaseConfigObj = {
  production: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: false,
    dialect: 'postgres',
  },
  development: {
    host: process.env.DB_HOST || 'postgres',
    port: process.env.DB_PORT || '5432',
    database: process.env.DB_DATABASE || 'postgres',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    logging: false,
    dialect: 'postgres',
  },
  test: {
    host: process.env.DB_HOST || 'postgres',
    port: process.env.DB_PORT || '5432',
    database: process.env.DB_DATABASE || 'postgres',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    logging: false,
    dialect: 'postgres',
  },
};

module.exports = databaseConfigObj;
