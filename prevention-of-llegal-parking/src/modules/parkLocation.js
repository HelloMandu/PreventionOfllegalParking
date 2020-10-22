import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import {
    getBusStation,
    getCrossWalk,
    getFireWaterFacility,
    getParkingLot,
    getCCTV
} from "../api/parkLocation";

const SET_BUS_STATION = "parkLocation/SET_BUS_STATION";
const SET_BUS_STATION_SAGA = "parkLocation/SET_BUS_STATION_SAGA";

const SET_CROSS_WALK = "parkLocation/SET_CROSS_WALK";
const SET_CROSS_WALK_SAGA = "parkLocation/SET_CROSS_WALK_SAGA";

const SET_FIRE_WATER_FACILITY = "parkLocation/SET_FIRE_WATER_FACILITY";
const SET_FIRE_WATER_FACILITY_SAGA = "parkLocation/SET_FIRE_WATER_FACILITY_SAGA";

const SET_PARKING_LOT = "parkLocation/SET_PARKING_LOT";
const SET_PARKING_LOT_SAGA = "parkLocation/SET_PARKING_LOT_SAGA";

const SET_CCTV = "parkLocation/SET_CCTV";
const SET_CCTV_SAGA = "parkLocation/SET_CCTV_SAGA";

// bus station
const setBusStation = createAction(
    SET_BUS_STATION,
    (busStation) => busStation
);

export const setBusStationSaga = createAction(
    SET_BUS_STATION_SAGA,
    (busStation) => busStation
);

// crosswalk
const setCrossWalk = createAction(
    SET_CROSS_WALK,
    (crossWalk) => crossWalk
);

export const setCrossWalkSaga = createAction(
    SET_CROSS_WALK_SAGA,
    (crossWalk) => crossWalk
);

// firewaterfacility
const setFireWaterFacility = createAction(
    SET_FIRE_WATER_FACILITY,
    (fireWaterFacility) => fireWaterFacility
);

export const setFireWaterFacilitySaga = createAction(
    SET_FIRE_WATER_FACILITY_SAGA,
    (fireWaterFacility) => fireWaterFacility
);

// parkinglot
const setParkingLot = createAction(
    SET_PARKING_LOT,
    (parkingLot) => parkingLot
);

export const setParkingLotSaga = createAction(
    SET_PARKING_LOT_SAGA,
    (parkingLot) => parkingLot
);

// cctv
const setCCTV = createAction(
    SET_CCTV,
    (cctv) => cctv
);

export const setCCTVSaga = createAction(
    SET_PARKING_LOT_SAGA,
    (cctv) => cctv
);


function* createRequestBusStation(action) {
    try {
        const response = yield call(getBusStation, action.payload);
        yield put(setBusStation(response));
    } catch (e) {
        console.log(e);
    }
}

function* createRequestCrossWalk(action) {
    try {
        const response = yield call(getCrossWalk, action.payload);
        yield put(setCrossWalk(response));
    } catch (e) {
        console.log(e);
    }
}

function* createRequestFireWaterFacility(action) {
    try {
        const response = yield call(getFireWaterFacility, action.payload);
        yield put(setFireWaterFacility(response));
    } catch (e) {
        console.log(e);
    }
}

function* createRequestParkingLot(action) {
    try {
        const response = yield call(getParkingLot, action.payload);
        yield put(setParkingLot(response));
    } catch (e) {
        console.log(e);
    }
}

function* createRequestCCTV(action) {
    try {
        const response = yield call(getCCTV, action.payload);
        yield put(setCCTV(response));
    } catch (e) {
        console.log(e);
    }
}

export function* parkLocationSaga() {
    yield takeLatest(SET_BUS_STATION_SAGA, createRequestBusStation);
    yield takeLatest(SET_CROSS_WALK_SAGA, createRequestCrossWalk);
    yield takeLatest(SET_FIRE_WATER_FACILITY_SAGA, createRequestFireWaterFacility);
    yield takeLatest(SET_PARKING_LOT_SAGA, createRequestParkingLot);
    yield takeLatest(SET_CCTV_SAGA, createRequestCCTV);
}

const initialState = {
    busStation: [],
    crossWalk: [],
    fireWaterFacility: [],
    parkingLot: [],
    cctv: []
};

const parkLocation = handleActions(
    {
        [SET_BUS_STATION]: (state, { payload: busStation }) => ({
            ...state,
            busStation: busStation,
        }),
        [SET_CROSS_WALK]: (state, { payload: crossWalk }) => ({
            ...state,
            crossWalk: crossWalk,
        }),
        [SET_FIRE_WATER_FACILITY]: (state, { payload: fireWaterFacility }) => ({
            ...state,
            fireWaterFacility: fireWaterFacility,
        }),
        [SET_PARKING_LOT]: (state, { payload: parkingLot }) => ({
            ...state,
            parkingLot: parkingLot,
        }),
        [SET_CCTV]: (state, { payload: cctv }) => ({
            ...state,
            cctv: cctv,
        }),
    },
    initialState
);

export default parkLocation;
