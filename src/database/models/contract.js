const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Contract = sequelize.define('contract', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    contract_number: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: false,
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
    end_date: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null,
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    subsequent_month: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(500),
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM('mensal', 'anual', 'semestral', 'trimestral', 'bimestral'),
      allowNull: false,
    },
    payment_status: {
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
    models.contract.belongsTo(models.company)
    models.contract.belongsTo(models.contact)
    models.contract.belongsTo(models.customer)
  }
  return Contract
}
