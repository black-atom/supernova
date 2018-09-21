module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('customer_pj', {
      customer_id: {
        type: Sequelize.UUID,
        references: {
          model: 'customer',
          key: 'id',
        },
      },
      socialName: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      stateRegistration: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),
  down: (queryInterface) => {
    queryInterface.dropTable('customer_pj')
  },
}
