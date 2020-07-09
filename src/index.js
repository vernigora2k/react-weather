import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from '../src/Redux/rootReducer'

// const initialState = {
//   mainMenuActiveBtn: 'now',
//   searchFormValue: 'aktobe'
// }

// function menuReducer(state=initialState, action) {
//   console.log(action.type)
//   switch(action.type) {
//     case 'NOW_BTN':
//       return {
//         mainMenuActiveBtn: 'now'
//       }
//     case 'DETAILS_BTN':
//       return {
//         mainMenuActiveBtn: 'details'
//       }
//     case 'FORECAST_BTN':
//       return {
//         mainMenuActiveBtn: 'forecast'
//       }
//     default: return state
//   }
// }

// function searchFormReducer(state=initialState, action) {

// }

const store = createStore(rootReducer)
//store.dispatch({ type: 'INCREMENT', amount: 5})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
