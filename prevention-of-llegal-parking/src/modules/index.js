import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import location, { locationSaga } from "./myLocation";
import parkLocation, { parkLocationSaga } from "./parkLocation";
import loading from './loading';

const rootReducer = combineReducers({
    location,
    parkLocation,
    loading
});

export function* rootSaga() {
    yield all([locationSaga(), parkLocationSaga()]);
};

export default rootReducer;
