import { call, put, takeEvery } from 'redux-saga/effects';

import actions from '../actions_types';
import { api } from '../utils';

function* getAverage(): any {
    try {
        const data = yield call(api, 'get', 'average')
        if(data) {
            yield put({
                payload: data,
                type: actions.GET_AVERAGE_SUCCESS
            })
        }
    }
    catch (e) {
        console.log(e)
    }
}

export function* rootSaga() {
    yield takeEvery(actions.GET_AVERAGE_REQUEST, getAverage)
};