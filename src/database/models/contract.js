const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const ProcuctsContract = sequelize.define('products_contract', {
    warranty_day: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    serial_number: {
      type: Sequelize.STRING(200),
    },
  })

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
    models.contract.belongsToMany(models.product, { through: ProcuctsContract })

    models.company.belongsTo(models.address)
  }


  ProcuctsContract.associate = (models) => {
    models.products_contract.belongsTo(models.product)
    models.company.belongsTo(models.address)
  }

  return Contract
}
