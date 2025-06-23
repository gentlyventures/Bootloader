class AgentManager {
  constructor(stateFile = '.bootstate.json') {
    this.stateFile = stateFile;
    this.agents = new Map();
  }
  register(name, AgentClass) {
    this.agents.set(name, AgentClass);
  }
  async run(agentName, context) {
    const AgentClass = this.agents.get(agentName);
    if (!AgentClass) throw new Error(`Unknown agent: ${agentName}`);
    const agent = new AgentClass(context);
    return agent.run();
  }
}
module.exports = AgentManager;
