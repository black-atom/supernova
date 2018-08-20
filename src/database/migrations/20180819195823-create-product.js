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
      unique: 'sku_company',
    },
    category: {
      type: Sequelize.ENUM('software', 'equipamento', 'peças', 'serviços'),
      allowNull: false,
    },
    unitPrice: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    companyId: {
      type: Sequelize.UUID,
      allowNull: false,
      unique: 'sku_company',
      references: {
        model: 'company',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION',
    },
  }),
  down: queryInterface => queryInterface.dropTable('product'),
}
