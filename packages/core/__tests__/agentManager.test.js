const manager = require('../index');
test('AgentManager registers and runs a stub agent', async () => {
  let called = false;
  class TestAgent { constructor(_ctx) {} async run() { called = true; } }
  manager.register('TestAgent', TestAgent);
  await manager.run('TestAgent', {});
  expect(called).toBe(true);
});
