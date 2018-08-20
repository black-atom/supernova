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
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    socialName: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    documentId: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    documentType: {
      type: Sequelize.ENUM('cpf', 'cnpj'),
      allowNull: false,
    },
  })

  Customer.associate = (models) => {
    models.customer.belongsToMany(models.customer, {
      through: 'customer_address',
    })
    models.customer.belongsToMany(models.customer, {
      through: 'customer_contact',
    })
  }
  return Customer
}
