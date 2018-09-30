const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Product = sequelize.define('product', {
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
    description: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    keywords: {
      type: Sequelize.ARRAY(Sequelize.STRING(20)),
      allowNull: true,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  })

  Product.associate = (models) => {
    models.product.belongsTo(models.company, {
      constraints: false,
    })

    models.product.hasOne(models.variant, {
      constraints: false,
    })

    models.product.belongsToMany(models.category, {
      through: 'product_category',
    })

    models.product.belongsToMany(models.property, {
      through: 'product_property',
    })
  }

  return Product
}
