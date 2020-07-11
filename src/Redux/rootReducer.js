import { combineReducers } from 'redux'

const initialStateMenu = {
    mainMenuActiveBtn: 'now'
}

function menuReducer(state=initialStateMenu, action) {
    console.log(action)
    switch(action.type) {
      case 'NOW_BTN':
        return {
          mainMenuActiveBtn: 'now'
        }
      case 'DETAILS_BTN':
        return {
          mainMenuActiveBtn: 'details'
        }
      case 'FORECAST_BTN':
        return {
          mainMenuActiveBtn: 'forecast'
        }
      default: return state
    }
}
  
const initialStateSearch = {
    searchFormValue: 'aktobe'
}

function searchFormReducer(state=initialStateSearch, action) {
  console.log(action)
  
  switch(action.type) {
    case 'NEW_SEARCH_VALUE': 
      return {
        ...state, searchFormValue: action.payload
      }
  }
    return state
}

export const rootReducer = combineReducers({
    mainMenuActiveBtn: menuReducer,
    searchFormValue: searchFormReducer
})