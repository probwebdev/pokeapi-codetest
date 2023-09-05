require('@rushstack/eslint-patch/modern-module-resolution');

const common = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'standard',
    'prettier',
    'plugin:import/recommended',
    'plugin:promise/recommended',
  ],
  plugins: [],
  rules: {
    'quotes': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'import/extensions': [2, 'never'],
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,
    'import/order': [
      1,
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'unknown',
          'type',
        ],
        'pathGroups': [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '~/css/**',
            group: 'internal',
          },
          {
            pattern: '~{components,config,theme,hooks}/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '~/**',
            group: 'parent',
          },
          {
            pattern: '~/types/**',
            group: 'type',
          },
        ],
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
        'warnOnUnassignedImports': true,
      },
    ],
  },
};

const typescript = {
  files: ['**/*.{ts,tsx}'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    ...common.settings,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  plugins: [...common.plugins, '@typescript-eslint'],
  extends: [
    ...common.extends,
    'standard-with-typescript',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  rules: {
    ...common.rules,
    'comma-dangle': 0,
    'react/prop-types': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/comma-dangle': [2, 'only-multiline'],
    '@typescript-eslint/quotes': [2, 'single', { allowTemplateLiterals: true }],
    '@typescript-eslint/space-before-function-paren': [2, { named: 'never' }],
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableNumber: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': [2, { ignoreIIFE: true }],
    '@typescript-eslint/consistent-type-exports': 2,
    '@typescript-eslint/consistent-type-imports': [
      2,
      { fixStyle: 'inline-type-imports' },
    ],
  },
};

const javascript = {
  files: ['**/*.{js,jsx}'],
  extends: [...common.extends],
};

const tests = {
  env: { ...common.env, jest: true },
  files: ['**/*.test.{ts,tsx}'],
  plugins: [...common.plugins, 'jest'],
  extends: [
    ...typescript.extends,
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  rules: {
    ...typescript.rules,
    '@typescript-eslint/ban-ts-comment': 0,
  },
};

module.exports = {
  ...common,
  overrides: [typescript, javascript, tests],
};
