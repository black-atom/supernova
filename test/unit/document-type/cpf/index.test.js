import test from 'ava'
import { validateCpf } from '../../../../src/utils'

test('validation valid document cpf should be return true', (t) => {
  t.true(validateCpf('14946324623'))
})

test('validation ivalid document cpf should be return false', (t) => {
  t.false(validateCpf('11144477705'))
})

test('validation document cpf numbers equals should be return false', (t) => {
  t.false(validateCpf('11111111111'))
})

test('validation document cpf length > than default should be return false', (t) => {
  t.false(validateCpf('1234567891111'))
})

test('validation document cpf length < than default should be return false', (t) => {
  t.false(validateCpf('123451'))
})
