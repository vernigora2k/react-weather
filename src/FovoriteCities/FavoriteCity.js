import React from 'react'
import classNames from 'classnames'

export default function FavoriteCity({ city }) {

    let isFavoriteCityPressed = false
    const favoriteCity = classNames({
        'favorite-city': true,
        'favorite-city_pressed': isFavoriteCityPressed
    })
    
    function showFavoriteCityPressed() {
        isFavoriteCityPressed = !isFavoriteCityPressed
    }

    return (
        <div 
          className={favoriteCity}
          onClick={console.log('click')}>
            <span>{city}</span>
        </div>
    )
}