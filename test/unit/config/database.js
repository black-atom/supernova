const getDatabaseConfig = require('../../../src/config/database')

test('to be a function', () => {
  expect(typeof getDatabaseConfig === 'function').toBe(true)
})

test('to have config for test', () => {
  const databseConfig = getDatabaseConfig('test')
  expect(Boolean(databseConfig)).toBe(true)
  expect(typeof databseConfig === 'object').toBe(true)
})

test('to have config for development', () => {
  const databseConfig = getDatabaseConfig('development')
  expect(Boolean(databseConfig)).toBe(true)
  expect(typeof databseConfig === 'object').toBe(true)
})

test('to have config for production', () => {
  const databseConfig = getDatabaseConfig('production')
  expect(Boolean(databseConfig)).toBe(true)
  expect(typeof databseConfig === 'object').toBe(true)
})

test('config for production must have all keys', () => {
  const databseConfig = getDatabaseConfig('production')
  expect('host' in databseConfig).toBe(true)
  expect('port' in databseConfig).toBe(true)
  expect('database' in databseConfig).toBe(true)
  expect('username' in databseConfig).toBe(true)
  expect('password' in databseConfig).toBe(true)
  expect('logging' in databseConfig).toBe(true)
})
