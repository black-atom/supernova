module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('variant', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
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
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sku: {
        type: Sequelize.STRING(255),
        allowNull: false,
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
    queryInterface.dropTable('variant')
  },
}
