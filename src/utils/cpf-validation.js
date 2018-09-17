const parserCpf = cpf => cpf.split('').map(num => parseInt(num))

let factoryFirstDigit = 10
const multiplyFirstDigitVerificated = (num, i) => {
  while (i < 10) {
    const calc = num * factoryFirstDigit
    factoryFirstDigit -= 1
    return calc
  }
  return 0
}

let factorySecondDigit = 11
const multiplySecondDigitVerificated = (num, i) => {
  while (i < 10) {
    const calc = num * factorySecondDigit
    factorySecondDigit -= 1
    return calc
  }
  return 0
}

const calculatorDigit = (document, numberIndex) => mutiply => document
  .filter((number, index) => index < numberIndex)
  .map((number, index) => mutiply(number, index))
  .reduce((prev, curr) => prev + curr, 0)


const calcDigit = digit => (digit < 2 ? 0 : 11 - digit)

const documentAllEqual = document => document.every(num => num === document[0])

const validate = (cpf) => {
  const cpfToArray = parserCpf(cpf)
  if (!documentAllEqual(cpfToArray) && cpfToArray.length === 11) {
    const firstDigit = calculatorDigit(cpfToArray, 9)(multiplyFirstDigitVerificated) % 11
    const secondDigit = calculatorDigit(cpfToArray, 10)(multiplySecondDigitVerificated) % 11
    const digitOne = calcDigit(firstDigit)
    const digitTwo = calcDigit(secondDigit)

    if (digitOne === cpfToArray[9] && digitTwo === cpfToArray[10]) {
      return true
    }
  }
  return false
}

module.exports = validate
