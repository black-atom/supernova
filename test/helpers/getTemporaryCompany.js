import getRequest from './getRequest'

const request = getRequest()

const getTemporaryCompany = () => request
  .post('/temporary')

export default getTemporaryCompany
