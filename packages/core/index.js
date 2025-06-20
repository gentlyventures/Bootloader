const adapters = {};
function registerAdapter(name, setup) {
  adapters[name] = setup;
}
function runAdapter(name, projectName, options) {
  const fn = adapters[name];
  if (typeof fn === 'function') {
    fn(projectName, options);
  } else {
    throw new Error(`Adapter ${name} not registered`);
  }
}
module.exports = { registerAdapter, runAdapter };
