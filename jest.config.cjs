module.exports = {
  projects: [
    '<rootDir>/packages/core',
    '<rootDir>/packages/portia-adapter',
    '<rootDir>/packages/init-phase',
    '<rootDir>/packages/langgraph-adapter',
    '<rootDir>/tools',
    {
      displayName: 'root',
      testMatch: ['<rootDir>/tests/integration/**/*.test.[jt]s?(x)']
    }
  ],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  testEnvironment: 'node'
};
