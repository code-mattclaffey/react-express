module.exports = {
  extends: [
    // Base configurations - using only what's needed from simplified dependencies
    'airbnb',
    'prettier',
    
    // TypeScript (if you decide to keep TypeScript support)
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    
    // React - included in airbnb but adding jsx-runtime explicitly
    'plugin:react/jsx-runtime',
  ],
  plugins: ['custom'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  rules: {
    // Import rules
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/order': 'off',
    'import/extensions': 'off',
    
    // React rules
    'react/jsx-boolean-value': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    
    // General rules
    'arrow-body-style': 'off',
    
    // TypeScript rules
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
  },
  ignorePatterns: [
    'jest.config.js',
    'test/setupTests.js',
    'public/scripts',
    'vite.config.ts',
  ],
}