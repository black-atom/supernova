module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .addColumn(
      'address',
      'type',
      Sequelize.ENUM('Cobrança', 'Entrega'),
    ),

  down: (queryInterface) => {
    queryInterface.removeColumn('address', 'type')
  },
}
