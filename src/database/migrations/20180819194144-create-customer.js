module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('customer', {
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
  }),
  down: queryInterface => queryInterface.dropTable('customer'),
}
