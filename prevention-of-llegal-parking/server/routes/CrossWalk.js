const Router = require('koa-router');

const getCoordinates = require('../lib/getCoordinates');

const crossWalk = require(`../data/json/CrossWalk.json`);

const api = new Router();

api.get('/cross-walk', (ctx) => {
  const {latitude, longitude, range} = ctx.query;
  const location = {
    latitude: latitude,
    longitude: longitude,
  }
  const response = getCoordinates(crossWalk, location, range);
  ctx.body = response
});

module.exports = api;