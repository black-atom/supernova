const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Category = sequelize.define('category', {
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
  })

  Category.associate = (models) => {
    models.category.belongsTo(models.company, {
      constraints: false,
    })
  }

  return Category
}
