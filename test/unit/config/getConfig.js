import test from 'ava';
import getConfig from '../../../src/config/getConfig';

test('to be a function', (t) => {
  t.is(typeof getConfig === 'function', true);
});


test('get the correct config according to env', (t) => {
  const configObj = {
    test: {
      config: true,
    },
    development: {
      config: false,
    },
  };

  const configForTest = getConfig(configObj)('test');
  const configForDevelopment = getConfig(configObj)('development');
  t.is(configForTest.config, true);
  t.is(configForDevelopment.config, false);
});
