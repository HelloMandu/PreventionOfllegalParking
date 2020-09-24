const axios = require('axios');

const getAddress = async (latitude, longitude) => {
    const KEY = '483E0418-2F46-3223-80A1-F66D16A24685'
    // const result = await axios.get(`http://api.vworld.kr/req/address?service=address&version=2.0&request=getaddress&key=${KEY}&format=json&point=${latitude},${longitude}&crs=epsg:4326&type=road&zipcode=true&simple=false`)
    const result = await axios.get(`http://api.vworld.kr/req/address`, {
        params: {
            service: 'address',
            request: 'getaddress',
            version: '2.0',
            crs: 'epsg:4326',
            point: `${latitude}, ${longitude}`,
            format: 'json',
            type: 'road',
            simple: 'false',
            key: KEY
        }
    })
    console.log(result.data);
}

getAddress(126.978275264, 37.566642192);