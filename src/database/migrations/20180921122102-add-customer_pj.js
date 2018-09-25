module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('customer_pj', {
      customerId: {
        type: Sequelize.UUID,
        references: {
          model: 'customer',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
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
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }),
  down: (queryInterface) => {
    queryInterface.dropTable('customer_pj')
  },
}
