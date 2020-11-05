const geolib = require("geolib");
const distanceFormat = require("./distanceFormat");

const getCoordinates = (json, location, range) => {
    let result = [];
    json.forEach((obj) => {
        const { LATITUDE, LONGITUDE } = obj;
        if (LATITUDE !== "" && LONGITUDE !== "") {
            const destination = {
                latitude: LATITUDE,
                longitude: LONGITUDE,
            };
            const distance = geolib.getDistance(location, destination);
            if (distance <= range) {
                obj = {
                    ...obj,
                    distance: distance,
                    DISTANCE: distance,
                };
                result.push(obj);
            }
        }
    });
    result.sort((a, b) => {
        return a.DISTANCE - b.DISTANCE;
    });
    result.forEach(loc => {
        loc.DISTANCE = distanceFormat(loc.DISTANCE);
    })
    return result;
};

module.exports = getCoordinates;
