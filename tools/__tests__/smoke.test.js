const argv = require('../cli');

test('cli loads and parses arguments', () => {
  expect(argv).toBeDefined();
});
