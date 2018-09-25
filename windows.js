const Sequelize = require('sequelize')
/* eslint-disable */
const db = new Sequelize({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  username: 'postgres',
  password: 'postgres',
  logging: false,
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  define: {
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
  },
})


const customer = db.define('custom', {
  name: Sequelize.STRING,
})

const customerPf = db.define('custom_pf', {
  name: Sequelize.STRING,
})

const address = db.define('custom_address', {
  name: Sequelize.STRING,
})

customer.hasOne(customerPf)
customerPf.belongsTo(customer)
customer.belongsToMany(address, { through: 'windows'})

db.authenticate()
  .then(() => console.log('connected'))
  .then(() => db.sync({ force: true }))
  .then(() => console.log('ran'))
  .then(async () => {
      console.log(db.models)
      const newCustomer = await customer.create({
        name: 'Vitor',
        custom_pf: {
          name: 'Windows',
        },
      }, { include: [customerPf ]})

      console.log(newCustomer.get({ plain: true }))
  })