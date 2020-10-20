import { createAction, handleActions } from "redux-actions";
import { call, delay, put, takeLatest } from "redux-saga/effects";

import { roadToPosition } from "../api/roadToPosition";

const SETLOCATION = "location/SETLOCATION";
const SETLOCATION_SAGA = "location/SETLOCATION_SAGA";
const ROAD_TO_POSITION = "location/ROAD_TO_POSITION";

export const setLocation = createAction(
    SETLOCATION,
    (newLocation) => newLocation
);
export const setLocationSaga = createAction(
    SETLOCATION_SAGA,
    (newLocation) => newLocation
);
export const roadToPositionSaga = createAction(
    ROAD_TO_POSITION,
    (road) => road
);

function* setLocationAsync(action) {
    yield delay(500);
    yield put(setLocation(action.payload));
}

function* setRoadToPosition(action) {
    try {
        const response = yield call(roadToPosition, action.payload);
        const { lat: latitude, lng: longitude } = response;
        yield put(setLocation({ latitude, longitude }));
    } catch (e) {
        console.log(e);
    }
}

export function* locationSaga() {
    yield takeLatest(SETLOCATION_SAGA, setLocationAsync);
    yield takeLatest(ROAD_TO_POSITION, setRoadToPosition);
}

const initialState = {
    latitude: 33.450701,
    longitude: 126.570667,
};

const location = handleActions(
    {
        [SETLOCATION]: (state, { payload: location }) => ({
            latitude: location.latitude,
            longitude: location.longitude,
        }),
    },
    initialState
);

export default location;
