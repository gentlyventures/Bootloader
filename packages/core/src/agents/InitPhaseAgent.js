class InitPhaseAgent {
  constructor(context) { this.context = context; }
  async run() {
    console.log('Running InitPhaseAgent with context:', this.context);
  }
}
module.exports = InitPhaseAgent;
