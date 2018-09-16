import test from 'ava'
import {
  createSession,
  getTemporaryCompany,
  getRequest,
} from '../../helpers'

const request = getRequest()

test.beforeEach(async (t) => {
  const temporaryCompany = await getTemporaryCompany()

  const { primaryUser: user } = temporaryCompany

  t.context.company = temporaryCompany
  t.context.user = user
  t.context.session = await createSession(user.email, user.password)
})

test('GET /api/profile should return info about the logged user', async (t) => {
  const { user, session } = t.context

  const {
    statusCode,
    body,
  } = await request.get('/api/profile', {
    headers: {
      Authorization: `bearer ${session.id}`,
    },
  })

  t.is(statusCode, 200)
  t.is(body.id, user.id)
  t.is(body.name, user.name)
  t.is(body.email, user.email)
  t.true(Array.isArray(body.roles))
})
