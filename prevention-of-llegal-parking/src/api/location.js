import { get } from "axios";

/*리덕스로 수정해야함*/
export const getLocation = async () => {
    const latitude = localStorage.getItem("latitude");
    const longitude = localStorage.getItem("longitude");
    const range = 3000;
    const response = await get("/coords", {
        params: {
            latitude: latitude,
            longitude: longitude,
            range: range,
        },
    });
    return response;
};
