module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('product', {
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
    street_number: {
      type: Sequelize.STRING(8),
      allowNull: false,
    },
    neighborhood: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    complementary: {
      type: Sequelize.STRING(150),
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
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }),
  down: queryInterface => queryInterface.dropTable('product'),
}
