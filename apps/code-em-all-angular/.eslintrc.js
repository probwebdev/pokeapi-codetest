module.exports = {
  parserOptions: { tsconfigRootDir: __dirname },
  extends: ['@codetest/eslint-config'],
  rules: {
    'import/no-extraneous-dependencies': [2, { packageDir: __dirname }],
    'import/extensions': [0, 'never', { css: 'always' }],
  },
};
