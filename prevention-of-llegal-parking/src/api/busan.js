import { get } from "axios";

export const getCCTV = async () => {
    const response = get('routes/busan-cctv');
    return response;
};

export const getParkingLot = async () => {
    const response = get('routes/busan-parkinglot');
    return response;
};

export const getChildren = async () => {
    const response = get('routes/busan-children');
    return response;
};
