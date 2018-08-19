module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('product', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    sku: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    category: {
      type: Sequelize.ENUM('software', 'equipamento', 'peças', 'serviços'),
      allowNull: false,
    },
    unit_price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }),
  down: queryInterface => queryInterface.dropTable('product'),
}
