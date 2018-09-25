const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Customer = sequelize.define('customer', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    type: {
      type: Sequelize.ENUM('Física', 'Jurídica'),
      allowNull: false,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  })

  Customer.associate = (models) => {
    models.customer.belongsTo(models.company)

    models.customer.hasOne(models.customer_pj)
    models.customer.hasOne(models.customer_pf)

    models.customer.belongsToMany(models.address, {
      through: 'customer_address',
    })
    models.customer.belongsToMany(models.contact, {
      through: 'customer_contact',
    })
  }

  return Customer
}
