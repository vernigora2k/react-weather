import { takeEvery, put, call } from 'redux-saga/effects'
import { newLocalTime } from './actions'
import { getLocalTime } from '../js/controller'

export function* sagaWatcher() {
    yield takeEvery('NEW_LOCAL_TIME', sagaWorker)
}

function fetchData(region) {
    return getLocalTime(region)
        .then()
}

function* sagaWorker({payload: timeZone}) {
    const { datetime } = yield call(fetchData, timeZone)

    yield put(newLocalTime(datetime.slice(11,16)))
}