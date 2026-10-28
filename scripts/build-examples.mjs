import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
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

const themes = [
  'theme1_base.css',
  'base-design.css',
  'formal-design.css',
  'theme2_lin.css',
  'lin-design.css',
].map((file) => resolve(root, 'themes', file));
const themeArgs = themes.flatMap((theme) => ['--theme-set', theme]);

const samples = [
  ['theme1_base', resolve(root, 'samples', 'theme1_base', 'slides.md')],
  ['theme2_lin', resolve(root, 'samples', 'theme2_lin', 'slides.md')],
  ['no-office', resolve(root, 'samples', 'no-office', 'slides.md')],
];

function runMarp(args) {
  const result = spawnSync(marp, args, { cwd: root, stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

for (const format of formats) {
  const outputDir = resolve(root, 'dist', format);
  mkdirSync(outputDir, { recursive: true });

  runMarp([
    '--input-dir', examplesDir,
    ...themeArgs,
    '--html',
    '--allow-local-files',
    '--no-parallel',
    `--${format}`,
    '--output', outputDir,
  ]);

  for (const [name, input] of samples) {
    const output = format === 'pdf'
      ? resolve(dirname(input), 'slides.pdf')
      : resolve(outputDir, 'samples', `${name}.html`);
    mkdirSync(dirname(output), { recursive: true });
    runMarp([
      input,
      ...themeArgs,
      '--html',
      '--allow-local-files',
      `--${format}`,
      '--output', output,
    ]);
  }
}
