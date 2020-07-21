import { takeEvery, put, call } from 'redux-saga/effects'
import { newLocalTime } from './actions'
import { getLocalTime } from '../js/controller'

export function* sagaWatcher() {
    yield takeEvery('NEW_SAGAS_TIME', sagaWorker)
}

function* fetchData(region) {
    return getLocalTime(region)
}

function* sagaWorker({payload: timeZone}) {
    const response = yield call(fetchData, timeZone)

    yield put(newLocalTime('datetime'))  //мне нужно этот datetime  достать из промиса .....
    
    console.log(response)
}

// function* fetchData() {
//     return fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json()) 
// }