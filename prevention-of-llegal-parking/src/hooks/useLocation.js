import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../modules/location";

const useLocation = () => {
    const [current, setCurrent] = useState({
        latitude: 33.450701,
        longitude: 126.570667,
    });
    const dispatch = useDispatch();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrent({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            dispatch(
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            );
        });
    }
    return [
        current,
        (newLocation) => {
            setCurrent(newLocation);
            dispatch(setLocation(newLocation));
        },
    ];
};

export default useLocation;
