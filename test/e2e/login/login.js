import test from 'ava'
import R from 'ramda'
import {
  database,
  getTemporaryCompany,
  getRequest,
} from '../../helpers'

const {
  company: Company,
  user: User,
} = database.models

const request = getRequest()

test.beforeEach(async (t) => {
  const {
    body: temporaryCompany,
  } = await getTemporaryCompany()

  t.context.company = temporaryCompany
  t.context.user = temporaryCompany.primaryUser
})

test('should return a valid session', async (t) => {
  const {
    user: contextUser,
    company: contextCompany,
  } = t.context
  const pickFromUser = R.pick(['id', 'name', 'documentId', 'companyId', 'email'])
  const pickFromCompany = R.pick(['name', 'documentId', 'id', 'email'])

  const sessionType = 'browser'
  const {
    statusCode,
    body,
  } = await request.post('/login', {
    username: contextUser.email,
    password: contextUser.password,
    type: sessionType,
  })

  t.is(statusCode, 200)
  t.truthy(body)

  t.is(body.userId, contextUser.id)
  t.is(body.companyId, contextCompany.id)
  t.is(body.type, sessionType)

  t.truthy(body.user)
  t.is(body.user.companyId, contextCompany.id)
  t.deepEqual(pickFromUser(body.user), pickFromUser(contextUser))
  t.deepEqual(pickFromCompany(body.company), pickFromUser(contextCompany))
})


test('should failed with UnauthorizedError when user or password is incorrect', async (t) => {
  const {
    statusCode,
    body,
  } = await request.post('/login', {
    username: 'incorrectUser',
    password: 'incorrectPassword',
  })

  t.is(statusCode, 401)
  t.truthy(body)

  t.is(body.status, 401)
  t.is(body.name, 'UnauthorizedError')
})

test('should failed with UnauthorizedError if company is not active', async (t) => {
  const {
    user: contextUser,
    company: contextCompany,
  } = t.context

  await Company.update(
    { active: false },
    {
      where: {
        id: contextCompany.id,
      },
    },
  )

  const sessionType = 'browser'
  const {
    statusCode,
    body,
  } = await request.post('/login', {
    username: contextUser.email,
    password: contextUser.password,
    type: sessionType,
  })

  t.is(statusCode, 401)
  t.truthy(body)

  t.is(body.status, 401)
  t.is(body.name, 'UnauthorizedError')
})

test('should failed with UnauthorizedError if user is deleted', async (t) => {
  const {
    user: contextUser,
  } = t.context

  await User.update(
    { deletedAt: new Date() },
    {
      where: {
        id: contextUser.id,
      },
    },
  )

  const sessionType = 'browser'
  const {
    statusCode,
    body,
  } = await request.post('/login', {
    username: contextUser.email,
    password: contextUser.password,
    type: sessionType,
  })

  t.is(statusCode, 401)
  t.truthy(body)

  t.is(body.status, 401)
  t.is(body.name, 'UnauthorizedError')
})
