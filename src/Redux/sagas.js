import { takeEvery } from 'redux-saga/effects'

export function* sagaWatcher() {
    yield takeEvery('NEW_SEARCH_VALUE', sagaWorker)
}

function* sagaWorker(props) {
    console.log(props)
}