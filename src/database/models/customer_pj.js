const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const CustomerPJ = sequelize.define('customer_pj', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
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

  return CustomerPJ
}
