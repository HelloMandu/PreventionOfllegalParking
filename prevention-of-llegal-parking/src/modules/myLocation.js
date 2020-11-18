import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import { startLoading, finishLoading } from "./loading";
import { roadToPosition } from "../api/RoadToPosition";
import {
    setCCTVSaga,
    setChildrenSaga,
    setParkingLotSaga,
} from "../modules/parkLocation";

const SET_LOCATION = "location/SET_LOCATION";
const SET_LOCATION_SAGA = "location/SET_LOCATION_SAGA";
const ROAD_TO_POSITION = "location/ROAD_TO_POSITION";

const setLocation = createAction(SET_LOCATION, (newLocation) => newLocation);
export const setLocationSaga = createAction(
    SET_LOCATION_SAGA,
    (newLocation) => newLocation
);
export const roadToPositionSaga = createAction(
    ROAD_TO_POSITION,
    (road) => road
);

function* setLocationAsync(action) {
    yield put(startLoading());
    yield put(setCCTVSaga(action.payload));
    yield put(setChildrenSaga(action.payload));
    yield put(setParkingLotSaga(action.payload));
    yield put(setLocation(action.payload));
    yield put(finishLoading());
}

function* setRoadToPosition(action) {
    try {
        yield put(startLoading());
        const response = yield call(roadToPosition, action.payload);
        const { lat: latitude, lng: longitude } = response;
        yield put(setLocation({ latitude, longitude }));
        yield put(setCCTVSaga({ latitude, longitude }));
        yield put(setChildrenSaga({ latitude, longitude }));
        yield put(setParkingLotSaga({ latitude, longitude }));
        yield put(finishLoading());
    } catch (e) {
        console.log(e);
    }
}

export function* locationSaga() {
    yield takeLatest(SET_LOCATION_SAGA, setLocationAsync);
    yield takeLatest(ROAD_TO_POSITION, setRoadToPosition);
}

const initialState = {
    latitude: 33.450701,
    longitude: 126.570667,
};

const location = handleActions(
    {
        [SET_LOCATION]: (state, { payload: location }) => ({
            latitude: location.latitude,
            longitude: location.longitude,
        }),
    },
    initialState
);

export default location;
