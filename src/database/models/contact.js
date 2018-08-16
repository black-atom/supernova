const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Contact = sequelize.define('contact', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    phone: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
  })
  return Contact
}
