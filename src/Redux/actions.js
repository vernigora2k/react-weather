const NEW_SEARCH_VALUE = 'NEW_SEARCH_VALUE'
const NEW_FAVORITE_NAME = 'NEW_FAVORITE_NAME'
const NEW_LOCAL_TIME = 'NEW_LOCAL_TIME'
const NEW_SAGAS_TIME = 'NEW_SAGAS_TIME'
const NEW_WEATHER_DATA = 'NEW_WEATHER_DATA'

export function newSearchValue(formValue) {
    return {
        type: NEW_SEARCH_VALUE, 
        payload: formValue
    }
}

export function newFavoriteName(favoriteName) {
    return {
        type: NEW_FAVORITE_NAME,
        payload: favoriteName
    }
}

export function newLocalTime(time) {
    return {
        type: NEW_LOCAL_TIME,
        payload: time
    }
}

export function timeSagas(time) {
    return {
        type: NEW_SAGAS_TIME,
        payload: time
    }
}

export function newWeatherData(data) {
    return {
        type: NEW_WEATHER_DATA,
        payload: data
    }
}