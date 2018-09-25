const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const CustomerPJ = sequelize.define('customer_pj', {
    customerId: {
      type: Sequelize.UUID,
      primaryKey: true,
    },
    socialName: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    cnpj: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
    },
    stateRegistration: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  })

  CustomerPJ.associate = (models) => {
    models.customer_pj.belongsTo(models.customer)
  }

  return CustomerPJ
}
