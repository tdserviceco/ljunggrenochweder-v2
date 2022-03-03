const fs = require('fs');
const XLSX = require("xlsx");
const xml = (req, res) => {
  const file = XLSX.readFile('demo.xlsx');
  console.log(XLSX.utils.sheet_to_json(file));

  const sheets = {}

  for (const sheetName of file.SheetNames) {
    sheets[sheetName] = XLSX.utils.sheet_to_json(file.Sheets[sheetName])
  }

  console.log(sheets)
  res.json(XLSX.utils.sheet_to_json(file))
}

module.exports = xml;