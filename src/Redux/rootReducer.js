import { combineReducers } from 'redux'
import { NEW_SEARCH_VALUE, NEW_FAVORITE_NAME, NEW_WEATHER_DATA, NEW_LOCAL_TIME } from './actions'
const NOW_BTN = 'NOW_BTN'
const DETAILS_BTN = 'DETAILS_BTN'
const FORECAST_BTN = 'FORECAST_BTN'
let initFavoriteName = 'aktobe'

const initialStateMenu = {
    mainMenuActiveBtn: 'now'
}

function menuReducer(state=initialStateMenu, action) {
    switch(action.type) {
      case NOW_BTN:
        return {
          mainMenuActiveBtn: 'now'
        }
      case DETAILS_BTN:
        return {
          mainMenuActiveBtn: 'details'
        }
      case FORECAST_BTN:
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
    case NEW_SEARCH_VALUE: 
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
    case NEW_FAVORITE_NAME:
      return {
        ...state, favoriteName: action.payload
      }
    default: 
      return state
  }
}

const initialDataState = {
  data: {
    temp: 18, 
    pres: 900, 
    sunrise: '12:00', 
    sunset: '12:00', 
    solar_rad: 233,
    wind_cdir_full: "west-northwest", 
    wind_spd: 2.57, 
    weather: {icon: "c02n", code: "801", description: "Few clouds"}
  }
}

function weatherDataReducer(state=initialDataState, action) {
  switch(action.type) {
    case NEW_WEATHER_DATA: 
      return {
        ...state, data: action.payload
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
    case NEW_LOCAL_TIME:
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
    time: setTimeReducer,
    weatherData: weatherDataReducer
})