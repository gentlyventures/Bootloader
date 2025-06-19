import { promises as fs } from 'fs';
import * as path from 'path';

async function main() {
  const [name] = process.argv.slice(2);
  if (!name) {
    console.error('Usage: ts-node tools/bootstrap-module.ts <name>');
    process.exit(1);
  }

  const repoRoot = process.cwd();
  const moduleDir = path.join(repoRoot, 'src', 'modules', name);
  await fs.mkdir(moduleDir, { recursive: true });

  const bootloaderDir = path.join(__dirname, '..', 'packages', 'core');
  for (const file of ['AGENTS.md', 'TODO.md']) {
    const src = path.join(bootloaderDir, file);
    const dest = path.join(moduleDir, file);
    await fs.copyFile(src, dest);
  }

  console.log(`Module '${name}' created at ${moduleDir}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
