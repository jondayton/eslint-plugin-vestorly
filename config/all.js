module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    'browser': true
  },
  plugins: [
    'vestorly'
  ],
  rules: {
    'vestorly/method-property-documentation': ['error', { 'max': 1 }]
  }
}
