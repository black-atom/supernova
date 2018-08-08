/**
 * Inspired by: https://github.com/pagarme/superbowleto/blob/master/test/helpers/request.js
 */
const Promise = require('bluebird')
const axios = require('axios')
const {
  applySpec,
  defaultTo,
  pick,
  prop,
  toLower,
} = require('ramda')

const defaultToEmptyObject = defaultTo({})
const pickValuesFromResponse = pick([
  'data',
  'status',
  'headers',
])
const transformResponseProps = applySpec({
  body: prop('data'),
  statusCode: prop('status'),
  headers: prop('headers'),
})

const getRequest = (config = {}) => {
  const defaultConfig = {
    baseURL: 'http://localhost:3000',
    headers: defaultToEmptyObject(),
    params: defaultToEmptyObject(),
    timeout: 3000,
  }

  const axiosConfig = { ...defaultConfig, ...config }
  const axiosIntance = axios.create(axiosConfig)

  return (url, method = 'get', data = {}, params = {}, headers = {}) => Promise
    .resolve({
      url,
      method: toLower(method),
      data,
      params,
      headers,
    })
    .then(axiosIntance.request)
    .then(pickValuesFromResponse)
    .catch(prop('response'))
    .then(transformResponseProps)
}

module.exports = getRequest
