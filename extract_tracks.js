const fs = require('fs');
const text = fs.readFileSync('assets.js', 'utf8');

function searchAround(keyword) {
  console.log(`\n--- Searching for: ${keyword} ---`);
  let idx = 0;
  while ((idx = text.toLowerCase().indexOf(keyword.toLowerCase(), idx)) !== -1) {
    console.log(text.substring(Math.max(0, idx - 50), Math.min(text.length, idx + 800)));
    console.log('---');
    idx += keyword.length;
  }
}

searchAround('Track 1:');
searchAround('Track 2:');
searchAround('Track 3:');
searchAround('Track 4:');
searchAround('Track 5:');
searchAround('Track 6:');
searchAround('Track 7:');
