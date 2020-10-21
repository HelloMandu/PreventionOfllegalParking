const Router = require('koa-router');

const getCoordinates = require('../lib/getCoordinates');

const fireWaterFacility = require(`../data/json/FireWaterFacility.json`);

const api = new Router();

api.get('/fire-water-facility', (ctx) => {
  const {latitude, longitude, range} = ctx.query;
  const location = {
    latitude: latitude,
    longitude: longitude,
  }
  const response = getCoordinates(fireWaterFacility, location, range);
  ctx.body = response
});

module.exports = api;