#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import core from '@gentlyventures/bootloader-core';
import Conductor from '@gentlyventures/bootloader-conductor';

const argv = yargs(hideBin(process.argv))
  .scriptName('boot')
  .command('new <name>', 'Scaffold a new project', yargs => {
    yargs.positional('name', { type: 'string', describe: 'Project name' });
  }, async ({ name }) => {
    await core.bootstrapProject(name);
  })
  .command('conductor <script>', 'Run Conductor script', yargs => {
    yargs.positional('script', { type: 'string', describe: 'Script to run' });
  }, async ({ script }) => {
    const conductor = new Conductor();
    conductor.run(script);
  })
  .help()
  .argv;
