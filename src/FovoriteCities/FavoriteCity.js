import React, { useContext } from 'react'
import classNames from 'classnames'
import Context from '../context'

export default function FavoriteCity({ city, changeFavoriteName }) {
    const { favoriteName } = useContext(Context)
    let isFavoriteCityPressed

    isFavoriteCityPressed = favoriteName === city

    const favoriteCity = classNames({
        'favorite-city': true,
        'favorite-city_pressed': isFavoriteCityPressed
    })
    
    function showFavoriteCityPressed() {
        changeFavoriteName(city)
    }

    return (
        <div 
          className={favoriteCity}
          onClick={showFavoriteCityPressed}>
            <span>{city}</span>
        </div>
    )
}