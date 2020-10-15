import {createAction, handleActions} from 'redux-actions';

const SETLOCATION = 'location/SETLOCATION';

export const setLocation = createAction(SETLOCATION);

const initialState = {
    latitude: -1,
    longitude: -1
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