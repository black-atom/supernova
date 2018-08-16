const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const ContractProduct = sequelize.define('contract_product', {
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
    tangible: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    unit_price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    warranty_day: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    serial_number: {
      type: Sequelize.STRING(200),
    },
  })

  ContractProduct.associate = (models) => {
    models.contract_product.belongsTo(models.address)
    models.contract_product.belongsTo(models.contract)
    // models.contract_product.belongsTo(models.product)
  }
  return ContractProduct
}
