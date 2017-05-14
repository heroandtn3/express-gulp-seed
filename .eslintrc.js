module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  installedESLint: true,
  env: {
    node: true,
    es6: true
  },
  extends: 'airbnb-base',
  rules: {
    'import/no-extraneous-dependencies': 0,
    'arrow-body-style': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'space-infix-ops': 0
  }
};
