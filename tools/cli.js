#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import core from '@gentlyventures/bootloader-core';

const argv = yargs(hideBin(process.argv))
  .scriptName('boot')
  .command('new <name>', 'Scaffold a new project', yargs => {
    yargs.positional('name', { type: 'string', describe: 'Project name' });
  }, async ({ name }) => {
    await core.bootstrapProject(name);
  })
  .help()
  .argv;
