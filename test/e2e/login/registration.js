const getRequest = require('../../helpers/getRequest')

const request = getRequest()

test.only('POST /registration with valid data', async () => {
  const registrationData = {
    company: {
      name: 'one@example.com',
      document_type: 'cnpj',
      document_id: '55693882000100',
    },
    user: {
      name: 'windows',
      email: 'windows',
      password: '123',
      document_type: 'cpf',
      document_id: '23377822801',
    },
  }

  const res = await request('/registration', 'post', registrationData)
  expect(res.statusCode).toBe(200)
  expect(res.body.name).toBe(registrationData.company.name)
  expect(res.body.document_id).toBe(registrationData.company.document_id)
})

// test('POST /registration with already registed user', async () => {
//   const registrationData = {
//     company: {
//       name: 'one@example.com',
//       document_type: 'cnpj',
//       document_id: '4234234242',
//     },
//     user: {
//       name: 'windows',
//       email: 'windows',
//       password: '123',
//       document_type: 'cpf',
//       document_id: '42592311873',
//     },
//   }

//   await request('/registration', 'post', registrationData)
//   const res = await request('/registration', 'post', registrationData)
// })
