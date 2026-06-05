const fs = require('fs');
const text = fs.readFileSync('assets.js', 'utf8');

function searchAround(keyword) {
  console.log(`\n--- Searching for: ${keyword} ---`);
  let idx = 0;
  while ((idx = text.toLowerCase().indexOf(keyword.toLowerCase(), idx)) !== -1) {
    console.log(text.substring(Math.max(0, idx - 50), Math.min(text.length, idx + 2000)));
    console.log('---');
    idx += keyword.length;
  }
}

searchAround('Microelectronics & VLSI');
