export const NEW_SEARCH_VALUE = 'NEW_SEARCH_VALUE'
export const NEW_FAVORITE_NAME = 'NEW_FAVORITE_NAME'
export const NEW_LOCAL_TIME = 'NEW_LOCAL_TIME'
export const NEW_SAGAS_TIME = 'NEW_SAGAS_TIME'
export const NEW_WEATHER_DATA = 'NEW_WEATHER_DATA'
export const NEW_SAGAS_WEATHER = 'NEW_SAGAS_WEATHER'

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

export function weatherSagas(city) {
    return {
        type: NEW_SAGAS_WEATHER,
        payload: city
    }
}