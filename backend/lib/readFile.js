const fs = require('fs')
const XLSX = require('xlsx')

let buf = fs.readFileSync('../data/xlsx/spot.xlsx')
let wb = XLSX.read(buf, { type: 'buffer' })

// let sheetName = wb.SheetNames
// let sheet = wb.Sheets
// sheetName.forEach((name) => {
//   let rows = XLSX.utils.sheet_to_json(sheet[name])
//   console.log(rows)
// })
wb.SheetNames.forEach((sheetName) => {
  console.log('sheetName: ' + sheetName)

  let rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
  console.log(rows)
})
