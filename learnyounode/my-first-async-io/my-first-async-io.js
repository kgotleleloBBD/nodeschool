const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, str) => {
    if (!err) {
        const lines = str.split('\n');
        const lineCount = lines.length;
        console.log(lineCount - 1);
    }
});
