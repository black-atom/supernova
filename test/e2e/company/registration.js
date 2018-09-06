import test from 'ava'
import { utils, getRequest } from '../../helpers'

const { generateText, documents } = utils
const request = getRequest()

test('POST /registration with valid data', async (t) => {
  const companyData = {
    name: `${generateText(10)}`,
    documentType: 'cnpj',
    documentId: documents.generateCNPJ(),
    user: {
      name: 'usuario_test',
      email: `${generateText(8)}@blackatom.com`,
      password: `${generateText(8)}`,
      documentType: 'cpf',
      documentId: documents.generateCPF(),
    },
  }

  const response = await request.post('/registration', companyData)

  t.is(response.statusCode, 200)
  t.truthy(response.body)
  const company = response.body
  t.is(company.name, companyData.name)
  t.is(company.document_id, companyData.document_id)
  t.true(company.active)

  const { primaryUser } = company
  t.is(primaryUser.id, company.primaryUserId)
  t.truthy(primaryUser)
  t.is(primaryUser.name, companyData.user.name)
  t.is(primaryUser.email, companyData.user.email)
  t.is(primaryUser.documentId, companyData.user.documentId)

  const [adminRole] = primaryUser.roles
  t.truthy(adminRole)
  t.is(adminRole.type, 'admin')
})

test('POST /registration should failed with same data', async (t) => {
  const companyData = {
    name: `${generateText(10)}`,
    documentType: 'cnpj',
    documentId: documents.generateCNPJ(),
    user: {
      name: 'usuario_test',
      email: `${generateText(8)}@blackatom.com`,
      password: `${generateText(8)}`,
      documentType: 'cpf',
      documentId: documents.generateCPF(),
    },
  }

  await request.post('/registration', companyData)
  const response = await request.post('/registration', companyData)

  t.is(response.statusCode, 409)
  t.is(response.body.status, 409)
  t.is(response.body.name, 'unique_constraint')
})
