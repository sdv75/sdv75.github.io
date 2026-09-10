import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';

const root = path.resolve('.');

function read(relativePath) {
  return readFileSync(path.join(root, relativePath), 'utf8');
}

test('landing page exposes the full reference section flow', () => {
  const html = read('index.html');

  for (const id of ['hero', 'practice', 'cases', 'pricing', 'faq', 'contact', 'footer']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }

  for (const label of [
    'Получить консультацию',
    'Направления практики',
    'Стоимость консультации',
    'Документы / FAQ',
    'Быстрый контакт',
  ]) {
    assert.match(html, new RegExp(label));
  }
});

test('contact form stays front-end only', () => {
  const html = read('index.html');
  const formMatch = html.match(/<form\b[^>]*class="contact-form"[^>]*>/);

  assert.ok(formMatch, 'contact form should be present');
  assert.doesNotMatch(formMatch[0], /\saction=/);
  assert.doesNotMatch(formMatch[0], /\smethod=/);
});

test('all linked local assets resolve from the workspace', () => {
  const html = read('index.html');
  const assetRefs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((value) => !value.startsWith('#') && !value.startsWith('tel:') && !value.startsWith('mailto:'));

  assert.ok(assetRefs.length >= 7, 'page should reference stylesheet, script, and visual assets');

  for (const asset of assetRefs) {
    assert.ok(existsSync(path.join(root, asset)), `${asset} should exist`);
  }
});
