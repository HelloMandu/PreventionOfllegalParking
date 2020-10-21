const Router = require('koa-router');

const getCoordinates = require('../lib/getCoordinates');

const parkingLot = require(`../data/json/ParkingLot.json`);

const api = new Router();

api.get('/parking-lot', (ctx) => {
  const {latitude, longitude, range} = ctx.query;
  const location = {
    latitude: latitude,
    longitude: longitude,
  }
  const response = getCoordinates(parkingLot, location, range);
  ctx.body = response
});

module.exports = api;