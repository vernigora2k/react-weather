import { takeEvery, put, call } from 'redux-saga/effects'
import { newLocalTime, NEW_SAGAS_WEATHER, newWeatherData, timeSagas, NEW_SAGAS_TIME } from './actions'
import { getLocalTime, getWeather } from '../js/controller'

export function* sagaTimeWatcher() {
    yield takeEvery(NEW_SAGAS_TIME, sagaTimeWorker)
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

function fetchWeather(city) {
    return getWeather(city)
        .then()
}

function* sagaWeatherWorker({payload: city}) {
    const { data } = yield call(fetchWeather, city)

    yield put(newWeatherData(data[0]))
    yield put(timeSagas(data[0].timezone))
}