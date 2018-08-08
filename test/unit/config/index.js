const config = require('../../../src/config')

test('to be a object', () => {
  expect(typeof config === 'object').toBe(true)
})

test('to have getDatabaseConfig function', () => {
  expect('getDatabaseConfig' in config).toBe(true)
  expect(typeof config.getDatabaseConfig === 'function').toBe(true)
})
