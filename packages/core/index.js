const AgentManager = require('./src/agents/AgentManager');
const InitPhaseAgent = require('./src/agents/InitPhaseAgent');
const ScaffoldAgent = require('./src/agents/ScaffoldAgent');
const CIAgent = require('./src/agents/CIAgent');
const DocAgent = require('./src/agents/DocAgent');
const LovableAgent = require('./src/agents/LovableAgent');

const manager = new AgentManager();
manager.register('InitPhaseAgent', InitPhaseAgent);
manager.register('ScaffoldAgent', ScaffoldAgent);
manager.register('CIAgent', CIAgent);
manager.register('DocAgent', DocAgent);
manager.register('LovableAgent', LovableAgent);

module.exports = manager;
