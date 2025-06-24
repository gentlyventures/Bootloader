// jest.config.cjs
module.exports = {
  projects: [
    '<rootDir>/packages/core',
    '<rootDir>/packages/portia-adapter',
    '<rootDir>/packages/init-phase',
    '<rootDir>/packages/langgraph-adapter',
    '<rootDir>/tools'
  ],
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/tests/integration/**/*.test.[jt]s?(x)'
  ],
  testEnvironment: 'node'
};
