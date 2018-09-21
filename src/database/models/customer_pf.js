const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const CustomerPF = sequelize.define('customer_pf', {
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
    cpf: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
    },
    rg: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
    },
    birthday: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  })

  return CustomerPF
}
