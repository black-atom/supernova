import getRequest from './getRequest'

const request = getRequest()

const createSession = (username, password) => request
  .post('/login', {
    username,
    password,
  })

export default createSession
