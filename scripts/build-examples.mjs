import { readdirSync, mkdirSync } from 'node:fs';
import { resolve, basename, extname } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '..');
const examplesDir = resolve(root, 'examples');
const marp = resolve(root, 'node_modules', '.bin', 'marp');
const requested = process.argv.includes('--format')
  ? process.argv[process.argv.indexOf('--format') + 1]
  : 'all';
const formats = requested === 'all' ? ['html', 'pdf'] : [requested];

if (!formats.every((format) => ['html', 'pdf'].includes(format))) {
  console.error(`Unsupported format: ${requested}`);
  process.exit(2);
}

const inputs = readdirSync(examplesDir)
  .filter((name) => extname(name) === '.md')
  .sort();

for (const format of formats) {
  const outputDir = resolve(root, 'dist', format);
  mkdirSync(outputDir, { recursive: true });
  for (const input of inputs) {
    const output = resolve(outputDir, `${basename(input, '.md')}.${format}`);
    const args = [
      resolve(examplesDir, input),
      '--theme-set', resolve(root, 'themes', 'base-design.css'),
      '--theme-set', resolve(root, 'themes', 'formal-design.css'),
      '--html',
      '--allow-local-files',
      `--${format}`,
      '--output', output,
    ];
    const result = spawnSync(marp, args, { cwd: root, stdio: 'inherit' });
    if (result.status !== 0) process.exit(result.status ?? 1);
  }
}
