const adapter = require('@gentlyventures/bootloader-langgraph-adapter');
test('langgraph adapter loads', () => {
  expect(typeof adapter).toBe('object');
});
