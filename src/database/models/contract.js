const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Contract = sequelize.define('contract', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    social_name: {
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
    expiration_date: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    subsequent_month: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    type: {
      type: Sequelize.ENUM('mensal', 'anual', 'semestral', 'trimestral', 'bimestral'),
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM('pago', 'aguardando pagamento', 'em atraso', 'encerrado'),
      allowNull: false,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  })
  Contract.associate = (models) => {
    models.contract.hasMany(models.contract_product)
    models.contract.belongsTo(models.address)
    models.contract.belongsTo(models.contact)
  }
  return Contract
}
