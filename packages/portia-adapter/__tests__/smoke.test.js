const adapter = require('@gentlyventures/bootloader-portia-adapter');
test('portia adapter loads', () => {
  expect(typeof adapter.registerAdapter).toBe('function');
});
