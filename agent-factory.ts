import { promises as fs } from 'fs';
import * as path from 'path';

interface Args {
  module: string;
  agent: string;
}

function parseArgs(): Args {
  const args: Args = { module: '', agent: '' };
  for (const arg of process.argv.slice(2)) {
    const [key, value] = arg.replace(/^--/, '').split('=');
    if (key === 'module') args.module = value;
    if (key === 'agent') args.agent = value;
  }
  if (!args.module || !args.agent) {
    console.error('Usage: ts-node agent-factory.ts --module=<module> --agent=<name>');
    process.exit(1);
  }
  return args;
}

async function createAgentFolder(baseDir: string, module: string, agent: string) {
  const agentDir = path.join(baseDir, 'src', 'modules', module, agent);
  await fs.mkdir(agentDir, { recursive: true });

  const boilerplate = `# ${agent}\n\nDescribe the ${agent} agent here.`;
  await fs.writeFile(path.join(agentDir, 'AGENTS.md'), boilerplate);
  await fs.writeFile(path.join(agentDir, 'TODO.md'), '- [ ] Define tasks for this agent');

  console.log(`Created ${agentDir}`);
}

async function main() {
  const { module, agent } = parseArgs();
  const repoRoot = process.cwd();
  await createAgentFolder(repoRoot, module, agent);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
