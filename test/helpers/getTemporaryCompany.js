import getRequest from './getRequest'

const request = getRequest()

const getTemporaryCompany = () => request
  .post('/temporary')
  .then(response => response.body)

export default getTemporaryCompany
