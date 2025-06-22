// SPDX-License-Identifier: MIT OR Commercial
// Copyright (c) 2025 Dave Weinberg
const { registerAdapter } = require('@gentlyventures/bootloader-core');
let portia;
try {
  portia = require('portia-sdk-python');
} catch {
  portia = {};
}

function setupPortia(projectName, options) {
  // TODO: generate Portia plan.py and config using templates
}

registerAdapter('portia', setupPortia);

module.exports = { registerAdapter };
