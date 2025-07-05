// generate-env.js
require('dotenv').config();
const fs = require('fs');

const out = `window.__ENV__ = {
  GOOGLE_API_KEY: "${process.env.GOOGLE_API_KEY}",
  GOOGLE_CX:       "${process.env.GOOGLE_CX}"
};\n`;

fs.writeFileSync('env.js', out);
console.log('Built env.js');
