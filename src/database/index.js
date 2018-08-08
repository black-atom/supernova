const Sequelize = require('sequelize')
const { getDatabaseConfig } = require('../config')
const models = require('./models')

const dbConfig = getDatabaseConfig()
const defaultDBConfig = {
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
    underscored: true,
  },
}

const sequelize = new Sequelize(Object.assign({}, defaultDBConfig, dbConfig))

const modelInstances = models.map(model => model(sequelize))
modelInstances
  .forEach(modelIntance => modelIntance.associate && modelIntance.associate(sequelize.models))

module.exports = sequelize
