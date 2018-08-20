module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('customer_contact', {
    customerId: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
      references: {
        model: 'customer',
        key: 'id',
      },
    },
    contactId: {
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
  down: queryInterface => queryInterface.dropTable('customer_contact'),
}
