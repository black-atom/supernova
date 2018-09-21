module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('customer_contact', {
      customer_id: {
        type: Sequelize.UUID,
        references: {
          model: 'customer',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'NO ACTION',
      },
      contact_id: {
        type: Sequelize.UUID,
        references: {
          model: 'contact',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'NO ACTION',
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
