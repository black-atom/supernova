module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('product_category', {
      product_id: {
        type: Sequelize.UUID,
        references: {
          model: 'product',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'NO ACTION',
      },
      category_id: {
        type: Sequelize.UUID,
        references: {
          model: 'category',
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
    queryInterface.dropTable('product_category')
  },
}
