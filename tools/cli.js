#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import core from '@gentlyventures/bootloader-core';
import InitPhase from '@gentlyventures/bootloader-init-phase';

const argv = yargs(hideBin(process.argv))
  .scriptName('boot')
  .command('new <name>', 'Scaffold a new project', yargs => {
    yargs.positional('name', { type: 'string', describe: 'Project name' });
  }, async ({ name }) => {
    await core.bootstrapProject(name);
  })
  .command('init <projectName>', 'Initialize a new project pre-flight', yargs => {
    yargs.positional('projectName', { type: 'string', describe: 'Project name' });
  }, async ({ projectName }) => {
    const initPhase = new InitPhase();
    initPhase.run(projectName);
  })
  .help()
  .argv;
