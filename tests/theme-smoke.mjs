import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '..');
const base = resolve(root, 'themes', 'base-design.css');
const formal = resolve(root, 'themes', 'formal-design.css');
const marp = resolve(root, 'node_modules', '.bin', 'marp');
const out = resolve(root, 'dist', 'test');
mkdirSync(out, { recursive: true });

const assertions = [
  [base, '/* @theme base-design */'],
  [formal, '/* @theme formal-design */'],
  [formal, "@import 'base-design'"],
];
for (const [file, needle] of assertions) {
  if (!existsSync(file) || !readFileSync(file, 'utf8').includes(needle)) {
    console.error(`Theme assertion failed: ${file} must include ${needle}`);
    process.exit(1);
  }
}

for (const [theme, input] of [
  ['base-design', resolve(root, 'examples', 'gallery.md')],
  ['formal-design', resolve(root, 'tests', 'formal-smoke.md')],
]) {
  const result = spawnSync(marp, [
    input,
    '--theme-set', base,
    '--theme-set', formal,
    '--html',
    '--allow-local-files',
    '--output', resolve(out, `${theme}.html`),
  ], { cwd: root, encoding: 'utf8' });
  if (result.status !== 0) {
    console.error(result.stdout);
    console.error(result.stderr);
    process.exit(result.status ?? 1);
  }
}

console.log('Theme smoke tests passed: base-design and formal-design render successfully.');
