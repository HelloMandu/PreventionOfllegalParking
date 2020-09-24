const fs = require("fs");
const XLSX = require("xlsx");

module.exports = function (filename) {
  const LOCATION = `C:/Users/Sungmin/Desktop/4-2/Final/PreventionOfllegalParking/backend/data/xlsx/${filename}.xlsx`;
  const buf = fs.readFileSync(LOCATION);
  const wb = XLSX.read(buf, { type: "buffer" });
  const json = {};
  wb.SheetNames.forEach((sheetName) => {
    json[sheetName] = XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
  });
  return json;
};
// const fs = require('fs')
// const XLSX = require('xlsx')

// let buf = fs.readFileSync('C:/Users/Sungmin/Desktop/4-2/Final/PreventionOfllegalParking/backend/data/xlsx/spot.xlsx')
// let wb = XLSX.read(buf, { type: 'buffer' })

// let sheetName = wb.SheetNames
// let sheet = wb.Sheets
// sheetName.forEach((name) => {
//   let rows = XLSX.utils.sheet_to_json(sheet[name])
//   console.log(rows)
// })
// const json = {};
// wb.SheetNames.forEach((sheetName) => {
//   console.log(sheetName);
//   json[sheetName] = XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
// })
// console.log(json.crosswalk);
