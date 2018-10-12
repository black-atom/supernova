module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('category', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      company_id: {
        type: Sequelize.UUID,
        references: {
          model: 'company',
          key: 'id',
        },
        allowNull: false,
        onUpdate: 'cascade',
        onDelete: 'NO ACTION',
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      presentation: {
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
    queryInterface.dropTable('category')
  },
}
