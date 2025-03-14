import fs from 'fs';
import path from 'path';
import xlsx from 'xlsx';
import { Selector } from 'testcafe';

fixture `Excel to CSV Conversion`
    .page `about:blank`; // No UI interaction needed

test('Convert Excel to CSV', async () => {
    // Define file paths
    const excelFilePath = path.join(__dirname, 'xl', 'sampleTest.xlsx'); // Corrected path
    const outputDir = path.join(__dirname, 'data'); // Ensure output directory exists
    const csvFilePath = path.join(outputDir, 'output.csv'); // Full path to CSV file

    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Check if the Excel file exists before proceeding
    if (!fs.existsSync(excelFilePath)) {
        throw new Error(`Excel file not found at path: ${excelFilePath}`);
    }

    // Read Excel file
    const workbook = xlsx.readFile(excelFilePath);
    const sheetName = workbook.SheetNames[0]; // First sheet
    const sheet = workbook.Sheets[sheetName];

    // Convert to CSV
    const csvData = xlsx.utils.sheet_to_csv(sheet);

    // Write CSV file
    fs.writeFileSync(csvFilePath, csvData, 'utf8');

    console.log(`CSV file saved at: ${csvFilePath}`);
});
