module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('contract', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    contract_code: {
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
    ended_date: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null,
    },
    created_date: {
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
    status: {
      type: Sequelize.ENUM('pago', 'aguardando pagamento', 'em atraso', 'encerrado'),
      allowNull: false,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }),
  down: queryInterface => queryInterface.dropTable('contract'),
}
