module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('address', {
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
    streetNumber: {
      type: Sequelize.STRING(8),
      allowNull: false,
    },
    neighborhood: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    complement: {
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
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  }),
  down: queryInterface => queryInterface.dropTable('address'),
}
