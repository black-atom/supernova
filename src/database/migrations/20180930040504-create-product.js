module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('product', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      keywords: {
        type: Sequelize.ARRAY(Sequelize.STRING(20)),
        allowNull: true,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      companyId: {
        type: Sequelize.UUID,
        references: {
          model: 'company',
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
  down: queryInterface => queryInterface
    .dropTable('product'),
}
