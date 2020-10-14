import axios from 'axios'

export const getLocation = async (lat=35.1948674, long=127.848583, range=30000) => {
    const URL = `/routes/coords`;
    const result = await axios.get(URL,{
        params:{
            lat: lat,
            long: long,
            range: range
        }
    });
    return result;
}