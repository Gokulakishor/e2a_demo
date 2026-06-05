const fs = require('fs');
const https = require('https');

https.get('https://e2a.nits.ac.in/assets/index-eb6c7c9d.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('assets.js', data);
    console.log('Downloaded JS bundle to assets.js');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
