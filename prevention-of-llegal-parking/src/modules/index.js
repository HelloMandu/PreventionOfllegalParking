import {combineReducers} from 'redux';
import { all } from 'redux-saga/effects';
import location, {locationSaga} from './location';

const rootReducer = combineReducers({
    location
})

export function* rootSaga() {
    yield all([locationSaga()]);
}

export default rootReducer;