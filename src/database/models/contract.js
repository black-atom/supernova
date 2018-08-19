const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const Contract = sequelize.define('contract', {
    contract_number: {
      type: Sequelize.STRING(200),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    socialName: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    documentId: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    documentType: {
      type: Sequelize.ENUM('cpf', 'cnpj'),
      allowNull: false,
    },
    expirationDate: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null,
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    subsequentMonth: {
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
    paymentStatus: {
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
    models.contract.belongsTo(models.contract, {

    })
  }
  return Contract
}
