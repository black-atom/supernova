const database = require('../../../database')
const { generateText, documents } = require('../../../utils')

const {
  company: Company,
  user: User,
  role: Role,
} = database.models

const createTemporaryCompany = async (req, res, next) => {
  const transaction = await database.transaction()
  try {
    const rawPassword = generateText(30)
    const primaryUser = {
      name: 'primary_user',
      email: `${generateText(20)}@blackatom.com`,
      password: rawPassword,
      documentType: 'cpf',
      documentId: documents.generateCPF(),
    }

    const company = {
      name: 'TEST_COMPANY',
      documentType: 'cnpj',
      documentId: documents.generateCNPJ(),
      users: [primaryUser],
    }

    const adminRole = await Role.findOne({
      where: {
        type: 'admin',
      },
      transaction,
      raw: true,
    })

    const userIntance = User.build(primaryUser)

    const createdCompany = await Company
      .create(company, { transaction })

    userIntance.companyId = createdCompany.id
    userIntance.addRole(adminRole.id, { transaction })

    createdCompany.primaryUserId = userIntance.id

    await userIntance.save({ transaction })
    await createdCompany.save({ transaction })
    await createdCompany.reload({
      transaction,
      include: [{
        model: User,
        as: 'primaryUser',
        include: [Role],
      }],
    })

    await transaction.commit()
    const rawCompany = createdCompany.get({ plain: true })
    rawCompany.primaryUser.password = rawPassword

    res.status(200).json(rawCompany)
  } catch (error) {
    transaction.rollback()
    next(error)
  }
}

module.exports = createTemporaryCompany
