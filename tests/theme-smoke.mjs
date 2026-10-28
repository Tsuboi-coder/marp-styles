import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '..');
const theme1 = resolve(root, 'themes', 'theme1_base.css');
const base = resolve(root, 'themes', 'base-design.css');
const formal = resolve(root, 'themes', 'formal-design.css');
const theme2 = resolve(root, 'themes', 'theme2_lin.css');
const linAlias = resolve(root, 'themes', 'lin-design.css');
const marp = resolve(root, 'node_modules', '.bin', 'marp');
const out = resolve(root, 'dist', 'test');
mkdirSync(out, { recursive: true });

const assertions = [
  [theme1, '/* @theme theme1_base */'],
  [theme1, "@import 'default'"],
  [base, '/* @theme base-design */'],
  [formal, '/* @theme formal-design */'],
  [formal, "@import 'base-design'"],
  [theme2, '/* @theme theme2_lin */'],
  [theme2, "@import 'base-design'"],
  [linAlias, '/* @theme lin-design */'],
  [linAlias, "@import 'theme2_lin'"],
];
for (const [file, needle] of assertions) {
  if (!existsSync(file) || !readFileSync(file, 'utf8').includes(needle)) {
    console.error(`Theme assertion failed: ${file} must include ${needle}`);
    process.exit(1);
  }
}

const themes = [theme1, base, formal, theme2, linAlias];
for (const [name, input] of [
  ['theme1_base', resolve(root, 'samples', 'theme1_base', 'slides.md')],
  ['theme2_lin', resolve(root, 'samples', 'theme2_lin', 'slides.md')],
  ['base-design', resolve(root, 'examples', 'gallery.md')],
  ['formal-design', resolve(root, 'tests', 'formal-smoke.md')],
  ['no-office', resolve(root, 'samples', 'no-office', 'slides.md')],
]) {
  const result = spawnSync(marp, [
    input,
    ...themes.flatMap((theme) => ['--theme-set', theme]),
    '--html',
    '--allow-local-files',
    '--output', resolve(out, `${name}.html`),
  ], { cwd: root, encoding: 'utf8' });
  if (result.status !== 0) {
    console.error(result.stdout);
    console.error(result.stderr);
    process.exit(result.status ?? 1);
  }
}

console.log('Theme smoke tests passed: canonical themes, compatibility themes, and samples render successfully.');
