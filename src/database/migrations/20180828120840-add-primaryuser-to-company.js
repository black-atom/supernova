module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'company',
      'primaryUserId',
      {
        type: Sequelize.UUID,
        allowNull: true,
        defaultValue: null,
        unique: false,
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
      },
    )
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('company', 'primaryUserId')
  },
}
