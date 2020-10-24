const Router = require('koa-router');


const busanChildren = require(`../data/json/BUSAN_CHILDREN.json`);

const api = new Router();

api.get('/busan-children', (ctx) => {
  ctx.body = busanChildren;
});

module.exports = api;
