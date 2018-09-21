const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const AddressType = sequelize.define('address_type', {
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
  })
  return AddressType
}
