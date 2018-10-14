const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Variant = sequelize.define('variant', {
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
    presentation: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    price: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    sku: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  })

  Variant.associate = (models) => {
    models.variant.belongsTo(models.product, {
      constraints: false,
    })
  }

  return Variant
}
