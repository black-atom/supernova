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
    social_name: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    document_id: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    document_type: {
      type: Sequelize.ENUM('cpf', 'cnpj'),
      allowNull: false,
    },
  })
  return Customer
}
