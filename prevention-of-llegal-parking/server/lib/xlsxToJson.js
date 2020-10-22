// data 디렉터리에 있는 xlsx파일을 읽은후 sheetName.json 저장
const fs = require('fs')
const XLSX = require('xlsx')

let buf = fs.readFileSync('C:\\Users\\Sungmin\\Desktop\\4-2\\Final\\PreventionOfllegalParking\\prevention-of-llegal-parking\\server\\data\\xlsx\\CCTV.xls')
let wb = XLSX.read(buf, { type: 'buffer' })

wb.SheetNames.forEach((sheetName) => {
  console.log('sheetName: ' + sheetName)
  let rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
  fs.writeFileSync(`C:\\Users\\Sungmin\\Desktop\\4-2\\Final\\PreventionOfllegalParking\\prevention-of-llegal-parking\\server\\data\\json\\CCTV.json`, JSON.stringify(rows), (err) => {
    console.error(err)
  })
})
