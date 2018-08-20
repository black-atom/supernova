module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('contract', {
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
    contract_number: {
      type: Sequelize.STRING(200),
      allowNull: false,
      unique: 'contract_number_company',
    },
    companyId: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'company',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION',
      unique: 'contract_number_company',
    },
    addressId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'address',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION',
    },
    contactId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'contact',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION',
    },
    customerId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION',
    },
  }),
  down: queryInterface => queryInterface.dropTable('contract'),
}
