const { execSync } = require('child_process');

 test('boot cli responds to --help', () => {
  const output = execSync('node tools/cli.js --help').toString();
  expect(output).toMatch(/boot/);
});
