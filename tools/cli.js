#!/usr/bin/env node
const core = require('@gentlyventures/bootloader-core');

const args = process.argv.slice(2);
const options = { portia: false };
let projectName = '';

for (const arg of args) {
  if (arg === '--portia') {
    options.portia = true;
  } else if (!projectName) {
    projectName = arg;
  }
}

if (options.portia) {
  core.runAdapter('portia', projectName, options);
}
