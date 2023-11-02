const fs = require('fs');

try {
  const buf = fs.readFileSync(process.argv[2]);
  const str = buf.toString();
  const lines = str.split('\n');
  const lineCount = lines.length;
  console.log(lineCount - 1);
} catch (err) {
  console.error("An error occurred while reading the file:", err);
}