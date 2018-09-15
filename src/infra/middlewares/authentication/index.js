const moment = require('moment')
const database = require('../../../database')
const { UnauthorizedError } = require('../../errors')
const { getSessionExpirationTime } = require('./../../../config')

const sessionExpirationTimeInMinutes = getSessionExpirationTime()

const {
  session: Session,
  user: User,
  company: Company,
} = database.models

const authentication = async (req, res, next) => {
  const authorization = req.get('authorization') || ''
  const [bearer, sessionId] = authorization.split(' ') // eslint-disable-line

  if (!sessionId) {
    return next(new UnauthorizedError())
  }

  const session = await Session.findById(sessionId, {
    include: [
      User,
      Company,
    ],
  })

  if (!session && !session.active) {
    return next(new UnauthorizedError())
  }

  if (session.type === 'browser') {
    const lastActivity = moment(session.lastActivity)
    const now = moment()
    const differenceInMinutes = lastActivity.diff(now, 'minutes')

    if (differenceInMinutes > sessionExpirationTimeInMinutes) {
      session.active = false
      await session.save()
      return next(new UnauthorizedError())
    }
  }

  session.lastActivity = new Date()
  await session.save()

  req.context = { // eslint-disable-line
    user: session.user,
    company: session.company,
    session,
  }
  return next()
}

module.exports = authentication