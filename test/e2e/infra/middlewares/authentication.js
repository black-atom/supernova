import R from 'ramda'
import moment from 'moment'
import test from 'ava'
import httpMocks from 'node-mocks-http'
import sinon from 'sinon'
import { authentication } from '../../../../src/infra/middlewares'
import { UnauthorizedError } from '../../../../src/infra/errors'

import {
  createSession,
  database,
  getTemporaryCompany,
} from '../../../helpers'

const {
  session: Session,
} = database.models

const createExpressReq = sessionId => httpMocks.createRequest({
  method: 'GET',
  url: 'http://fakeurl:3000',
  headers: {
    authorization: `Bearer ${sessionId}`,
  },
})

test.beforeEach(async (t) => {
  const temporaryCompany = await getTemporaryCompany()

  const { primaryUser: user } = temporaryCompany
  const session = await createSession(user.email, user.password)

  t.context.company = temporaryCompany
  t.context.user = user
  t.context.session = session
})

test('should fail if there is no session id in the authorization header', (t) => {
  const request = httpMocks.createRequest()
  const res = {}
  const next = sinon.spy()

  authentication(request, res, next)
  const error = next.getCall(0).args[0]

  t.true(next.called)
  t.true(error instanceof UnauthorizedError)
})


test('should pass valid session and save company, user, and session in req object', async (t) => {
  const { session } = t.context
  const pickFromUser = R.pick(['id', 'name', 'documentId', 'companyId', 'email'])
  const pickFromCompany = R.pick(['name', 'documentId', 'id', 'email'])

  const req = createExpressReq(session.id)
  const res = {}
  const next = sinon.spy()

  await authentication(req, res, next)
  t.true(next.calledWithExactly())

  t.is(session.id, req.context.session.id)
  t.deepEqual(pickFromUser(session.user), pickFromUser(req.context.user))
  t.deepEqual(pickFromCompany(session.company), pickFromCompany(req.context.company))
})

test('should update lastActivity', async (t) => {
  const { session } = t.context

  const req = createExpressReq(session.id)
  const res = {}
  const next = sinon.spy()

  await authentication(req, res, next)

  t.is(session.id, req.context.session.id)
  t.true(next.calledWithExactly())
  t.not(session.lastActivity, req.context.session.lastActivity)
})

test('should fail with expired lastActivity', async (t) => {
  const { session } = t.context

  const databaseSession = await Session.findById(session.id)
  const expirationInMinutes = Number(process.env.SESSION_EXPIRATION_TIME)
  const lastActivity = moment(databaseSession.lastActivity)
  databaseSession.lastActivity = lastActivity.add('minutes', expirationInMinutes + 2).toDate()
  await databaseSession.save()

  const req = createExpressReq(session.id)
  const res = {}
  const next = sinon.spy()

  await authentication(req, res, next)
  const error = next.getCall(0).args[0]

  t.true(next.called)
  t.true(error instanceof UnauthorizedError)
})

test('should not expire if session type is app', async (t) => {
  const { user } = t.context
  const session = await createSession(user.email, user.password, 'app')

  const databaseSession = await Session.findById(session.id)
  const expirationInMinutes = Number(process.env.SESSION_EXPIRATION_TIME)
  const lastActivity = moment(databaseSession.lastActivity)
  databaseSession.lastActivity = lastActivity.add('minutes', expirationInMinutes + 2).toDate()
  await databaseSession.save()

  const req = createExpressReq(session.id)
  const res = {}
  const next = sinon.spy()

  await authentication(req, res, next)

  t.true(next.calledWithExactly())
})
