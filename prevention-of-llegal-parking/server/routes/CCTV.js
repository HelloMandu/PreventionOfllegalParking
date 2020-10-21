const Router = require('koa-router');

const getCoordinates = require('../lib/getCoordinates');

const cctv = require(`../data/json/CCTV.json`);

const api = new Router();

/*Json 파일 수정해야함*/
api.get('/cctv', (ctx) => {
  const {latitude, longitude, range} = ctx.query;
  const location = {
    latitude: latitude,
    longitude: longitude,
  }
  const response = getCoordinates(cctv, location, range);
  ctx.body = response
});

module.exports = api;