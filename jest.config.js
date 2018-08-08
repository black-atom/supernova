module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/*.js',
  ],
  testPathIgnorePatterns: [
    'helpers',
  ],
}
