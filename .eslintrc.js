module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': 0,
    'vue/require-prop-types': 0
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: [
    'prettier'
  ]
}