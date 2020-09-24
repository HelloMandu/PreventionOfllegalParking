const Router = require("koa-router");
const fs = require("fs");
const XLSX = require("xlsx");
const geolib = require("geolib");

const api = new Router();

api.get("/:filename", (ctx) => {
    const {filename} = ctx.params;
    let buf = fs.readFileSync(`../../data/xlsx/spot.xlsx`);
    // let wb = XLSX.read(buf, { type: "buffer" });
    // let records = [];
    // wb.SheetNames.forEach((sheetName) => {
    //     records.push(XLSX.utils.sheet_to_json(wb.Sheets[sheetName]));
    // });
    // let result = [];
    // records.forEach((record) => {
    //     if (
    //         geolib.getDistance(
    //             { latitude: record.latitude, longitude: record.longitude },
    //             { latitude: 127.366998, longitude: 36.97586 }
    //         ) <= 300
    //     ) {
    //         result.push(record);
    //     }
    // });
    ctx.body = filename;
});

module.exports = api;
