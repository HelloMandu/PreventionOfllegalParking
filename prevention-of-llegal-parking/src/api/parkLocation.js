import { get } from 'axios';

const range = 3000;

export const getBusStation = async ({latitude, longitude}) =>{
    const response = await get("routes/bus-station", {
        params: {
            latitude: latitude,
            longitude: longitude,
            range: range
        },
    })
    return response.data;
}

export const getCrossWalk = async ({latitude, longitude}) =>{
    const response = await get("routes/cross-walk", {
        params: {
            latitude: latitude,
            longitude: longitude,
            range: range
        },
    })
    return response.data;
}

export const getFireWaterFacility = async ({latitude, longitude}) =>{
    const response = await get("routes/fire-water-facility", {
        params: {
            latitude: latitude,
            longitude: longitude,
            range: range
        },
    })
    return response.data;
}

export const getParkingLot = async ({latitude, longitude}) =>{
    const response = await get("routes/parking-lot", {
        params: {
            latitude: latitude,
            longitude: longitude,
            range: range
        },
    })
    return response.data;
}

export const getCCTV = async ({latitude, longitude}) =>{
    const response = await get("routes/cctv", {
        params: {
            latitude: latitude,
            longitude: longitude,
            range: range
        },
    })
    return response.data;
}