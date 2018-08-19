module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('contract', {
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
  }),
  down: queryInterface => queryInterface.dropTable('contract'),
}
