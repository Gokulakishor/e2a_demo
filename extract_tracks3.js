const fs = require('fs');
const text = fs.readFileSync('assets.js', 'utf8');

function searchAround(keyword) {
  console.log(`\n--- Searching for: ${keyword} ---`);
  let idx = 0;
  while ((idx = text.toLowerCase().indexOf(keyword.toLowerCase(), idx)) !== -1) {
    console.log(text.substring(Math.max(0, idx - 100), Math.min(text.length, idx + 1000)));
    console.log('---');
    idx += keyword.length;
    if (idx > text.length) break;
  }
}

searchAround('Micro-Electronics');
searchAround('Microelectronics');
searchAround('Signal Processing');
searchAround('tracks =');
searchAround('const tracks');
