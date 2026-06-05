const fs = require('fs');
const text = fs.readFileSync('assets.js', 'utf8');

const regex = /{heading:"([^"]+)",items:\[(.*?)\]}/g;
let match;
while ((match = regex.exec(text)) !== null) {
  console.log('Title: ' + match[1]);
  console.log('Topics: ' + match[2]);
  console.log('---');
}
