import {createAction, handleActions} from 'redux-actions';

const SETLOCATION = 'location/SETLOCATION';

export const setLocation = createAction(SETLOCATION);

const initialState = {
    latitude: 33.450701,
    longitude: 126.570667
};

const location = handleActions(
    {
        [SETLOCATION]: (state, {payload: location}) => ({
            latitude: location.latitude,
            longitude: location.longitude
        }),
    },
    initialState
);

export default location;