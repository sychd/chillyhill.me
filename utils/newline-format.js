#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Usage: node format.js <file.txt>');
  process.exit(1);
}

// Read file
let text = fs.readFileSync(path.resolve(process.cwd(), inputFile), 'utf8');

// Remove YAML front matter
let yamlMatch = text.match(/^---[\s\S]*?---\s*/);
let yamlHeader = '';
if (yamlMatch) {
  yamlHeader = yamlMatch[0];
  text = text.slice(yamlHeader.length);
}

const lines = text.split(/\n+/);

const result = [];
let paragraph = [];
let dialogueBlock = [];

lines.forEach((line) => {
  line = line.trim();

  if (!line) {
    // Empty line ends paragraphs or dialogue blocks
    if (dialogueBlock.length > 0) {
      result.push(dialogueBlock.join('\n'));
      dialogueBlock = [];
    }
    if (paragraph.length > 0) {
      result.push(paragraph.join(' '));
      paragraph = [];
    }
  } else if (line.startsWith('—')) {
    // Dialogue line
    if (paragraph.length > 0) {
      result.push(paragraph.join(' '));
      paragraph = [];
    }
    dialogueBlock.push(line);
  } else if (/^<[^>]+>$/.test(line)) {
    // HTML tag alone on the line
    if (paragraph.length > 0) {
      result.push(paragraph.join(' '));
      paragraph = [];
    }
    if (dialogueBlock.length > 0) {
      result.push(dialogueBlock.join('\n'));
      dialogueBlock = [];
    }
    result.push(line);
  } else {
    // Normal text
    if (dialogueBlock.length > 0) {
      result.push(dialogueBlock.join('\n'));
      dialogueBlock = [];
    }
    paragraph.push(line);
  }
});

// Add remaining blocks
if (dialogueBlock.length > 0) result.push(dialogueBlock.join('\n'));
if (paragraph.length > 0) result.push(paragraph.join(' '));

// Combine with YAML header
const finalText = yamlHeader + result.join('\n\n');

// Overwrite the same file

fs.writeFileSync(path.resolve(process.cwd(), inputFile), finalText, 'utf8');
console.log(`File ${inputFile} updated with dialogue blocks combined.`);
