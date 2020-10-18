import {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setLocation} from '../modules/location';

const useLocation = () =>{
    const location = useRef({
        latitude: 33.450701,
        longitude: 126.570667
    })
    const dispatch = useDispatch();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            location.current = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };
            dispatch(setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }))
        });
    }
    return [location, (newLocation) =>{
        location.current = newLocation;
        dispatch(setLocation(newLocation))
    }];
}

export default useLocation;