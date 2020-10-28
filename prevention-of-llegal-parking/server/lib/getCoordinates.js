const geolib = require("geolib");

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
                result.push(obj);
            }
        }
    });
    return result;
};

module.exports = getCoordinates;
