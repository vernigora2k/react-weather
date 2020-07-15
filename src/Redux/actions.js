export function newSearchValue(formValue) {
    return {
        type: 'NEW_SEARCH_VALUE', 
        payload: formValue
    }
}

export function newFavoriteName(favoriteName) {
    return {
        type: 'NEW_FAVORITE_NAME',
        payload: favoriteName
    }
}

export function newLocalTime(time) {
    return {
        type: 'NEW_LOCAL_TIME',
        payload: time
    }
}