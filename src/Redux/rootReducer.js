import { combineReducers } from 'redux'

let initFavoriteName = 'aktobe'

const initialStateMenu = {
    mainMenuActiveBtn: 'now'
}

function menuReducer(state=initialStateMenu, action) {
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
  switch(action.type) {
    case 'NEW_SEARCH_VALUE': 
    initFavoriteName = action.payload
      return {
        ...state, searchFormValue: action.payload
      }
    default:
      return state
  }
}

const initialStateFavoriteName = {
  favoriteName: initFavoriteName
}

function favoriteNameReducer(state=initialStateFavoriteName, action) {
  switch(action.type) {
    case 'NEW_FAVORITE_NAME':
      return {
        ...state, favoriteName: action.payload
      }
    default: 
      return state
  }
}

const initialTimeValue = {
  time: 'local time'
}

function setTimeReducer(state=initialTimeValue, action) {
  switch(action.type) {
    case 'NEW_LOCAL_TIME':
      return {
        ...state, time: action.payload
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
    mainMenuActiveBtn: menuReducer,
    searchFormValue: searchFormReducer,
    favoriteName: favoriteNameReducer,
    time: setTimeReducer
})