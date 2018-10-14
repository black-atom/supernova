import test from 'ava'
import {
  getRequest,
  createSession,
  getTemporaryCompany,
} from '../../helpers'

let request

test.beforeEach(async (t) => {
  const temporaryCompany = await getTemporaryCompany()
  const { primaryUser: user } = temporaryCompany
  const session = await createSession(user.email, user.password)

  t.context.session = session

  request = getRequest({
    headers: {
      authorization: `Bearer ${session.id}`,
    },
  })
})

test('should create a product', async (t) => {
  const product = {
    name: 'Tesla',
    description: 'A beautiful car.',
    keywords: ['car', 'tesla', 'beautiful'],
    variant: {
      name: 'Model S',
      presentation: 'Model S',
      sku: 'JCOOL-JN-SK-34L-GN',
      price: '7000000',
    },
    category: [
      {
        name: 'cars',
        description: '',
      },
    ],
    property: [
      {
        name: 'color',
        value: 'red',
      },
      {
        name: 'from 0-60mph',
        value: '2.5s',
      },
      {
        name: 'safety 0-5',
        value: '5',
      },
      {
        name: 'mile range',
        value: '335',
      },
    ],
  }

  await request.post('/product', product)

  t.true(true)
})
