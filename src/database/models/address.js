const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Address = sequelize.define('address', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    street: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    number: {
      type: Sequelize.STRING(8),
      allowNull: false,
    },
    neighborhood: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    city: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    zipcode: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING(15),
      allowNull: false,
      defaultValue: 'Brasil',
    },
    description: {
      type: Sequelize.STRING(250),
      allowNull: false,
      defaultValue: '',
    },
  })

  return Address
}
