#!/usr/bin/env node
// format.js
// Node.js script to format prose and dialogues into paragraphs with proper newlines
// Dialogues (lines starting with "—") are grouped into one block
// Normal text lines each become separate paragraphs
// Ignores HTML tags on their own line and YAML front matter
// Does not add extra newlines if they already exist

import fs from 'fs';
import path from 'path';

const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Usage: node format.js <file.txt>');
  process.exit(1);
}

// Read file relative to current working directory
let text = fs.readFileSync(path.resolve(process.cwd(), inputFile), 'utf8');

// Extract YAML front matter if present
let yamlMatch = text.match(/^---[\s\S]*?---\s*/);
let yamlHeader = '';
if (yamlMatch) {
  yamlHeader = yamlMatch[0];
  text = text.slice(yamlHeader.length);
}

// Split text into lines
const lines = text.split(/\n/); // Split on single newline

const result = [];
let dialogueBlock = [];

// Helper: flush dialogue block into result
function flushDialogue() {
  if (dialogueBlock.length > 0) {
    const last = result[result.length - 1] || '';
    // Add a newline before dialogue block only if not already present
    if (last.trim() !== '') result.push('');
    result.push(dialogueBlock.join('\n'));
    dialogueBlock = [];
  }
}

// Process each line
for (let line of lines) {
  const trimmed = line.trim();

  if (trimmed === '') {
    // Empty line ends current dialogue block
    flushDialogue();
    // Only add extra empty line if previous line is not already empty
    if (result[result.length - 1]?.trim() !== '') result.push('');
    continue;
  }

  if (trimmed.startsWith('—')) {
    // Dialogue line
    dialogueBlock.push(trimmed);
    continue;
  }

  if (/^<[^>]+>$/.test(trimmed)) {
    // HTML tag on its own line
    flushDialogue();
    result.push(trimmed);
    continue;
  }

  // Normal prose line → each line = separate paragraph
  flushDialogue();
  const last = result[result.length - 1] || '';
  if (last.trim() !== '') result.push(''); // add newline if needed
  result.push(trimmed);
}

// Flush remaining dialogue at the end
flushDialogue();

// Combine YAML header and formatted text
const finalText = yamlHeader + result.join('\n');

// Overwrite the same file
fs.writeFileSync(path.resolve(process.cwd(), inputFile), finalText, 'utf8');
console.log(`File ${inputFile} updated with proper paragraph formatting.`);
