module.exports = {
  ...require('@codetest/lint-staged-config'),
  '*.css': ['pnpm stylelint --fix', 'pnpm prettier --write'],
};
