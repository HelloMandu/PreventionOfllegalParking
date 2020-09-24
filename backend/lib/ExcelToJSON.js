// // const fs = require("fs");
// // const XLSX = require("xlsx");

// // module.exports = function (filename) {
// //   console.log(filename)
// //   const LOCATION = `../data/xlsx/${filename}.xlsx`;
// //   let buf = fs.readFileSync(LOCATION);
// //   let wb = XLSX.read(buf, { type: "buffer" });
// //   let result = [];
// //   wb.SheetNames.forEach((sheetName) => {
// //     result.push(XLSX.utils.sheet_to_json(wb.Sheets[sheetName]));
// //   });
// //   return result;
// // };
// const fs = require('fs');
// const XLSX = require('xlsx');

// function test(filename)  {
//   // const LOCATION = `../data/xlsx/${filename}.xlsx`;
//   const LOCATION = `test.txt`;
//   if(fs.existsSync(LOCATION)){
//     console.log("trye");
//   }
//   else{
//     console.log("왜ㅅㅂ");
//   }
//   // let buf = fs.readFileSync(LOCATION);
//   // let wb = XLSX.read(buf, { type: "buffer" });
//   // let result = [];
//   // wb.SheetNames.forEach((sheetName) => {
//   //   result.push(XLSX.utils.sheet_to_json(wb.Sheets[sheetName]));
//   // });
//   // // return result;
//   // console.log(result)
//   // fs.readdir('../data/xlsx',function(err,filelist){ console.log(filelist); });

// };
// test("spot");
const fs = require('fs')
const XLSX = require('xlsx')

let buf = fs.readFileSync('./spot.xlsx')
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
