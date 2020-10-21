const geolib = require('geolib')

const getCoordinates = (json, location, range) => {
    let result = [];
    json.forEach((obj) => {
        if (obj.Latitude !== "" && obj.Longitude !== "") {
            const { Latitude, Longitude } = obj;
            const destination = {
                latitude: Latitude,
                longitude: Longitude
            };
            const distance = geolib.getDistance(location, destination);
            if (distance <= range) {
                result.push(obj);
            }
        }
    });
    return result;
};

module.exports = getCoordinates;
