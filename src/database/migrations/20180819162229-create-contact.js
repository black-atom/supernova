module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('contact', {
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
  }),
  down: queryInterface => queryInterface.dropTable('contact'),
}
