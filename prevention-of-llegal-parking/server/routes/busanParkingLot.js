const Router = require('koa-router');


const busanParkingLot = require(`../data/json/BUSAN_PARKINGLOT.json`);

const api = new Router();

api.get('/busan-parkinglot', (ctx) => {
  ctx.body = busanParkingLot;
});

module.exports = api;
