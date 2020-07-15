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