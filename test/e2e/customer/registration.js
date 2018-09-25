import test from 'ava'
import { prop } from 'ramda'
import {
  createSession,
  getTemporaryCompany,
  getRequest,
  utils,
} from '../../helpers'

const request = getRequest()
const { generateText, documents } = utils

test.beforeEach(async (t) => {
  const temporaryCompany = await getTemporaryCompany()

  const { primaryUser: user } = temporaryCompany

  t.context.company = temporaryCompany
  t.context.user = user
  t.context.session = await createSession(user.email, user.password)
})

test('POST /api/customer', async (t) => {
  const { session } = t.context

  const customerData = {
    name: `${generateText(10)}`,
    email: `${generateText(8)}@blackatom.com`,
    type: 'Física',
    active: true,
    customer_pf: {
      name: `${generateText(10)}`,
      rg: `${documents.generateCPF()}`,
      cpf: `${documents.generateCPF()}`,
      birthday: '1994-05-25',
    },
    contacts: [{
      name: 'Vai Vendo',
      phone: '1545',
      email: `${generateText(8)}@blackatom.com`,
    }],
    addresses: [{
      street: 'Rua Zero',
      streetNumber: '1545',
      neighborhood: 'Vila Grande',
      complement: 'Casa',
      city: 'São Paulo',
      state: 'SP',
      zipcode: '9876543210',
      country: 'BR',
    }],
  }



  const response = await request.post('/api/customer', customerData, {
    headers: {
      Authorization: `bearer ${session.id}`,
    },
  })

  const customerResponse = objectCustomer => (
    JSON.stringify({
      name: prop('name', objectCustomer),
      email: prop('email', objectCustomer),
      type: prop('type', objectCustomer),
      active: prop('active', objectCustomer),
      customer_pf: {
        name: prop('name', objectCustomer.customer_pf),
        rg: prop('rg', objectCustomer.customer_pf),
        cpf: prop('cpf', objectCustomer.customer_pf),
        birthday: prop('birthday', objectCustomer.customer_pf),
      },
      contacts: [{
        name: prop('name', objectCustomer.contacts[0]),
        phone: prop('phone', objectCustomer.contacts[0]),
        email: prop('email', objectCustomer.contacts[0]),
      }],
      addresses: [{
        street: prop('street', objectCustomer.addresses[0]),
        streetNumber: prop('streetNumber', objectCustomer.addresses[0]),
        neighborhood: prop('neighborhood', objectCustomer.addresses[0]),
        complement: prop('complement', objectCustomer.addresses[0]),
        city: prop('city', objectCustomer.addresses[0]),
        state: prop('state', objectCustomer.addresses[0]),
        zipcode: prop('zipcode', objectCustomer.addresses[0]),
        country: prop('country', objectCustomer.addresses[0]),
      }],
    })
  )

  t.is(response.statusCode, 200)
  t.is(customerResponse(response.body), JSON.stringify(customerData))
  t.truthy(response.body.id)
})
