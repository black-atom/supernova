const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Company = sequelize.define('company', {
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
    documentId: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
    },
    documentType: {
      type: Sequelize.ENUM('cpf', 'cnpj'),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  })

  Company.associate = (models) => {
    models.company.hasMany(models.user)
    models.company.hasMany(models.product)
    models.company.hasMany(models.contract)
    models.company.hasMany(models.customer)

    models.company.belongsTo(models.user, {
      as: 'primaryUser',
    })

    models.company.belongsToMany(models.customer, {
      through: 'company_address',
    })
    models.company.belongsToMany(models.customer, {
      through: 'company_contact',
    })
  }

  return Company
}
