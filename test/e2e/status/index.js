import test from 'ava'
import {
  getRequest,
} from '../../helpers'

const request = getRequest()

test('should return status ok', async (t) => {
  const {
    statusCode,
    body,
  } = await request.get('/status')

  t.is(statusCode, 200)
  t.truthy(body)

  t.is(body, 'ok')
})
