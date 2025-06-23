// jest.config.cjs
module.exports = {
  projects: [
    '<rootDir>/packages/core',
    '<rootDir>/packages/portia-adapter',
    '<rootDir>/packages/init-phase'
  ],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  testEnvironment: 'node'
};
