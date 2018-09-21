module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .addColumn(
      'contact',
      'type',
      Sequelize.ENUM('Email', 'WhatsApp', 'Skype'),
    ),

  down: (queryInterface) => {
    queryInterface.removeColumn('contact', 'type')
  },
}
