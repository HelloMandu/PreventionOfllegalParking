import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLocationSaga } from "../modules/location";
import {
    setBusStationSaga,
    setCrossWalkSaga,
    setFireWaterFacilitySaga,
    setParkingLotSaga,
    setCCTVSaga,
} from "../modules/parkLocation";
import root from "window-or-global";
import { useEffect } from "react";

const useLocation = () => {
    const current = useSelector((state) => state.location);
    const dispatch = useDispatch();
    const setCurrent = useCallback(
        (newLocation) => {
            dispatch(setLocationSaga(newLocation));
            dispatch(setBusStationSaga(newLocation));
            dispatch(setCrossWalkSaga(newLocation));
            dispatch(setFireWaterFacilitySaga(newLocation));
            dispatch(setParkingLotSaga(newLocation));
            dispatch(setCCTVSaga(newLocation));
        },
        [dispatch]
    );
    useEffect(() => {
        if (typeof root !== "undefined" && root.IntersectionObserver) {
            if (root.navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const newLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    dispatch(setLocationSaga(newLocation));
                    dispatch(setBusStationSaga(newLocation));
                    dispatch(setCrossWalkSaga(newLocation));
                    dispatch(setFireWaterFacilitySaga(newLocation));
                    dispatch(setParkingLotSaga(newLocation));
                    dispatch(setCCTVSaga(newLocation));
                });
                console.log("Use navigator");
            }
        } else {
            console.log("Cant' navigator");
        }
    }, [dispatch]);

    return [current, setCurrent];
};

export default useLocation;
