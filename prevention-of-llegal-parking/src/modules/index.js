import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import location, { locationSaga } from "./location";
import parkLocation, { parkLocationSaga } from "./parkLocation";

const rootReducer = combineReducers({
    location,
    parkLocation,
});

export function* rootSaga() {
    yield all([locationSaga(), parkLocationSaga()]);
}

export default rootReducer;
