import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const sourceFile = path.join(__dirname, '../../user_read_only_context/text_attachments/Daidai_操作マニュアル_v100-y65Ts.pdf');
const destFile = path.join(publicDir, 'manua.pdf');

try {
  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log('Created public directory');
  }

  // Copy PDF file
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    console.log(`Successfully copied PDF to ${destFile}`);
  } else {
    console.error(`Source file not found: ${sourceFile}`);
    process.exit(1);
  }
} catch (error) {
  console.error('Error setting up PDF:', error.message);
  process.exit(1);
}
