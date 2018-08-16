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
    document_id: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    document_type: {
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
    models.company.belongsToMany(models.address, {
      through: 'company_address',
    })

    models.company.hasMany(models.user)
    
    models.company.belongsTo(models.user, {
      as: 'primary_user',
      foreignKey: 'primary_user_id',
      constraints: false,
    })
  }

  return Company
}
