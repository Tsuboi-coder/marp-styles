import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
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

for (const format of formats) {
  const outputDir = resolve(root, 'dist', format);
  mkdirSync(outputDir, { recursive: true });
  const args = [
    '--input-dir', examplesDir,
    '--theme-set', resolve(root, 'themes', 'base-design.css'),
    '--theme-set', resolve(root, 'themes', 'formal-design.css'),
    '--html',
    '--allow-local-files',
    '--no-parallel',
    `--${format}`,
    '--output', outputDir,
  ];
  const result = spawnSync(marp, args, { cwd: root, stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
