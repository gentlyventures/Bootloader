const core = require('@gentlyventures/bootloader-core');
test('core module loads', () => {
  expect(typeof core.registerAdapter).toBe('function');
});
