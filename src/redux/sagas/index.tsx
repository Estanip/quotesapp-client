import { call, put, takeEvery, all, delay } from 'redux-saga/effects';

import actions from '../actions_types';
import { api } from '../../utils';

function* getQuotes(): Object {
    try {
        let delayOn = false;
        while (true) {
            const data = yield call(api, 'get', 'quotes')
            if (data.success === true) {
                if (delayOn) {
                    yield delay(15000)
                }
                delayOn = true;
                yield put({
                    payload: data.quotesArray,
                    type: actions.GET_QUOTES_SUCCESS
                })
            }
        }
    }
    catch (e) {
        console.log(e)
    }
};

function* getAverage(): Object {
    try {
        const data = yield call(api, 'get', 'average')
        if (data) {
            yield put({
                payload: data,
                type: actions.GET_AVERAGE_SUCCESS
            })
        }
    }
    catch (e) {
        console.log(e)
    }
};

function* getSlippages(): Object {
    try {
        const data = yield call(api, 'get', 'slippage')
        if (data) {
            yield put({
                payload: data,
                type: actions.GET_SLIPPAGE_SUCCESS
            })
        }
    }
    catch (e) {
        console.log(e)
    }
};

export function* rootSaga() {
    yield all([
        takeEvery(actions.GET_QUOTES_REQUEST, getQuotes),
        takeEvery(actions.GET_AVERAGE_REQUEST, getAverage),
        takeEvery(actions.GET_SLIPPAGE_REQUEST, getSlippages)
    ]);
};