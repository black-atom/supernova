const getConfig = require('../../../src/config/getConfig')

const configMock = {
  development: {
    database: 'postgres-development',
  },
  test: {
    database: 'postgres-test',
  },
  production: {
    database: 'postgres-production',
  },
}

test('call with argument', () => {
  const config = getConfig(configMock)('production')

  expect(config).toEqual({
    database: 'postgres-production',
  })
})

afterEach(() => {
  process.env.NODE_ENV = 'test'
})

test('process.env.NODE_ENV set to development', () => {
  process.env.NODE_ENV = 'developent'
  const config = getConfig(configMock)('development')
  expect(config).toEqual({
    database: 'postgres-development',
  })
})

test('process.env.NODE_ENV set to empty', () => {
  process.env.NODE_ENV = ''
  const config = getConfig(configMock)()

  expect(config).toEqual({
    database: 'postgres-test',
  })
})
