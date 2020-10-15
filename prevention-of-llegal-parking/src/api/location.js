import {get} from 'axios'

export const getLocation = async () => {
    const latitude = localStorage.getItem('latitude');
    const longitude = localStorage.getItem('longitude');
    const range = 3000;
    const result = await get('/coords',{
        params:{
            latitude: latitude,
            longitude: longitude,
            range: range
        }
    });
    return result;
}