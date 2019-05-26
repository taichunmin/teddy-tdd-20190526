module.exports = {
  collectCoverage: true,
  clearMocks: true,
  collectCoverageFrom: [
    '**/*.js',
    '!**/*.config.js',
    '!**/node_modules/**',
    '!coverage/**',
  ],
}
