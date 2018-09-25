module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('customer_contact', {
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
      contactId: {
        type: Sequelize.UUID,
        references: {
          model: 'contact',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
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
    queryInterface.dropTable('customer_contact')
  },
}
