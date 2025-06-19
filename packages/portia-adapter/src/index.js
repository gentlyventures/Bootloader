const { registerAdapter } = require('@gentlyventures/bootloader-core');
const portia = require('portia-sdk-python');

function setupPortia(projectName, options) {
  // TODO: generate Portia plan.py and config using templates
}

registerAdapter('portia', setupPortia);
