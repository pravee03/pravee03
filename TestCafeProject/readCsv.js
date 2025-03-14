const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

function readCsvFile(filePath) {
    const csvData = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
    return parse(csvData, {
        columns: true,
        skip_empty_lines: true
    });
}

module.exports = { readCsvFile };
