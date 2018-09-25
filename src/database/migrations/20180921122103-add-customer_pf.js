module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('customer_pf', {
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
      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      rg: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      cpf: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      birthday: {
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
    queryInterface.dropTable('customer_pf')
  },
}
