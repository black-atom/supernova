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
      defaultValue: true,
    },
  })

  Company.associate = (models) => {
    models.company.hasMany(models.user)

    models.company.belongsTo(models.user, {
      as: 'primaryUser',
      constraints: false,
    })

    models.company.belongsToMany(models.address, {
      through: 'company_address',
    })
    models.company.belongsToMany(models.contact, {
      through: 'company_contact',
    })
  }

  return Company
}
