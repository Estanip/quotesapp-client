import { call, takeEvery } from 'redux-saga/effects';

import actions from '../actions_types';
import { api } from '../utils';

function* getAverage(): any {
    const result = yield call(api, 'get', 'average')
    console.log("HOLAAA SAGA", result)
    console.log("Holis");
}

// Watchers
export function* rootSaga() {
    yield takeEvery(actions.GET_AVERAGE, getAverage)
};
