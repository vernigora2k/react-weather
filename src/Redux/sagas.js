import { takeEvery, put, call } from 'redux-saga/effects'
import { newLocalTime, NEW_SAGAS_WEATHER } from './actions'
import { getLocalTime } from '../js/controller'

export function* sagaTimeWatcher() {
    yield takeEvery('NEW_SAGAS_TIME', sagaTimeWorker)
}

function fetchTime(region) {
    return getLocalTime(region)
        .then()
}

function* sagaTimeWorker({payload: timeZone}) {
    const { datetime } = yield call(fetchTime, timeZone)

    yield put(newLocalTime(datetime.slice(11,16)))
}



export function* sagaWeatherWatcher() {
    yield takeEvery(NEW_SAGAS_WEATHER, sagaWeatherWorker)
}

function* sagaWeatherWorker() {
    console.log('I am sagaWeatherWatcher ')  
}