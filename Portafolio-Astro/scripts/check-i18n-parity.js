// Script para validar que es.json y en.json tienen las mismas claves
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const esPath = join(__dirname, '../src/i18n/es.json');
const enPath = join(__dirname, '../src/i18n/en.json');

function getAllKeys(obj, prefix = '') {
  const keys = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys.push(...getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

function checkParity() {
  const es = JSON.parse(readFileSync(esPath, 'utf-8'));
  const en = JSON.parse(readFileSync(enPath, 'utf-8'));

  const esKeys = new Set(getAllKeys(es));
  const enKeys = new Set(getAllKeys(en));

  const missingInEn = [...esKeys].filter(k => !enKeys.has(k));
  const missingInEs = [...enKeys].filter(k => !esKeys.has(k));

  if (missingInEn.length === 0 && missingInEs.length === 0) {
    console.log('✓ Las claves de es.json y en.json son idénticas');
    return true;
  }

  if (missingInEn.length > 0) {
    console.error('❌ Claves faltantes en en.json:');
    missingInEn.forEach(k => console.error(`  - ${k}`));
  }

  if (missingInEs.length > 0) {
    console.error('❌ Claves faltantes en es.json:');
    missingInEs.forEach(k => console.error(`  - ${k}`));
  }

  return false;
}

const success = checkParity();
process.exit(success ? 0 : 1);
