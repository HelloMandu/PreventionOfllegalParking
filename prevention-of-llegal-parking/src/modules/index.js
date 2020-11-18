import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import location, { locationSaga } from "./myLocation";
import parkLocation, { parkLocationSaga } from "./parkLocation";
import loading from './loading';
import isCheck from './isCheck';

const rootReducer = combineReducers({
    location,
    parkLocation,
    loading,
    isCheck
});

export function* rootSaga() {
    yield all([locationSaga(), parkLocationSaga()]);
};

export default rootReducer;
