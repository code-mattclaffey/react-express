module.exports = {
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    resources: 'usable',
    runScripts: 'dangerously',
    customExportConditions: [''],
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/',  '<rootDir>/.template/'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
        },
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/stories/',
    '!src/stories/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  maxWorkers: 4,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageDirectory: 'jest-coverage',
  globals: {
    TZ: 'UTC',
  },
}
