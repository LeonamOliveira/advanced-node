module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Adicione regras personalizadas aqui (se necessário)
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-namespace": "off"
  },
  env: {
    node: true
  }
}
