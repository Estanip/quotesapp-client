import { call, put, all, delay, takeLatest } from 'redux-saga/effects';

import actions from '../actions_types';
import { api } from '../../utils';

function* getQuotes(): Object {
    while (true) {
        try {
            const data = yield call(api, 'get', 'quotes')
            console.log("DATA", data)
            yield put({
                payload: data,
                type: actions.GET_QUOTES_SUCCESS
            })
            yield delay(15000)
        }
        catch (error) {
            console.log(error)
        }
    }
};

function* getAverage(): Object {
    try {
        const data = yield call(api, 'get', 'average')
        yield put({
            payload: data,
            type: actions.GET_AVERAGE_SUCCESS
        })
    } catch (error) {
        console.log(error)
    }
};

function* getSlippages(): Object {
    try {
        const data = yield call(api, 'get', 'slippage')
        yield put({
            payload: data,
            type: actions.GET_SLIPPAGE_SUCCESS
        })
    }
    catch (error) {
        console.log(error)
    }
};

export function* rootSaga() {
    yield all([
        takeLatest(actions.GET_QUOTES_REQUEST, getQuotes),
        takeLatest(actions.GET_AVERAGE_REQUEST, getAverage),
        takeLatest(actions.GET_SLIPPAGE_REQUEST, getSlippages)
    ]);
};