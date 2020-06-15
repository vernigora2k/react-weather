import React from 'react'
import classNames from 'classnames'

export default function FavoriteCity({ city, changeFavoriteName }) {

    let isFavoriteCityPressed = false
    const favoriteCity = classNames({
        'favorite-city': true,
        'favorite-city_pressed': isFavoriteCityPressed
    })
    
    function showFavoriteCityPressed() {
        isFavoriteCityPressed = true
        changeFavoriteName(city)
        
    }

    return (
        <div 
          className={favoriteCity}
          onClick={() => showFavoriteCityPressed()}>
            <span>{city}</span>
        </div>
    )
}