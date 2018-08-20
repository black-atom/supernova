module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('company_address', {
    companyId: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
      references: {
        model: 'company',
        key: 'id',
      },
    },
    addresdId: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
      references: {
        model: 'address',
        key: 'id',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('company_address'),
}
