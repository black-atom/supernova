module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('company', {
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
    document_id: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    document_type: {
      type: Sequelize.ENUM('cpf', 'cnpj'),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }),
  down: queryInterface => queryInterface.dropTable('company'),
}
