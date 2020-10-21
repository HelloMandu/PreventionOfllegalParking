const Router = require('koa-router');

const getCoordinates = require('../lib/getCoordinates');

const busStationJson = require(`../data/json/BusStation.json`);

const api = new Router();

api.get('/bus-station', (ctx) => {
  const {latitude, longitude, range} = ctx.query;
  const location = {
    latitude: latitude,
    longitude: longitude,
  }
  const response = getCoordinates(busStationJson, location, range);
  ctx.body = response
});

module.exports = api;
