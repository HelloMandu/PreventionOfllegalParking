const Router = require('koa-router');


const busanCCTV = require(`../data/json/BUSAN_CCTV.json`);

const api = new Router();

api.get('/busan-cctv', (ctx) => {
  ctx.body = busanCCTV;
});

module.exports = api;
