#!/usr/bin/env node
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const InitPhase = require('@gentlyventures/bootloader-init-phase');
const manager = require('@gentlyventures/bootloader-core');
const core = manager;

const argv = yargs(hideBin(process.argv))
  .scriptName('boot')
  .command('new <name>', 'Scaffold a new project', yargs => {
    yargs.positional('name', { type: 'string', describe: 'Project name' });
  }, async ({ name }) => {
    await core.bootstrapProject(name);
  })
  .command('init <projectName>', 'Initialize a new project pre-flight and run agent workflow', yargs => {
    yargs.positional('projectName', { type: 'string', describe: 'Project name' });
  }, async ({ projectName }) => {
    // 1️⃣ Scaffold the project using InitPhase
    await new InitPhase(projectName).run();

    // 2️⃣ Run the pre-flight agent on the scaffolded project
    await manager.run('InitPhaseAgent', { projectName });
    console.log('✅ InitPhaseAgent completed');
  })
  .help()
  .argv;
