import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  id: 233
}

function reducer(state=initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        id: state.id + 1
      }
    default: return state
  }
}

const store = createStore(reducer)
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
