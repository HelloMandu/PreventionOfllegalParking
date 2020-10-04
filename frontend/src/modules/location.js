import {createAction, handleActions} from 'redux-actions';

const SETLOCATION = 'location/SETLOCATION';

export const setLocation = createAction(SETLOCATION);

const initialState = {
    latitude: -1,
    longitude: -1
};

const location = handleActions(
    {
        [SETLOCATION]: (state, action) => ({
            latitude: state.latitude,
            longitude: state.longitude
        }),
    },
    initialState
);

export default location;