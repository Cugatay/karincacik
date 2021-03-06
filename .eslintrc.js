module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-use-before-define': 0,
    'react/jsx-filename-extension': 0,
    // 'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
};
