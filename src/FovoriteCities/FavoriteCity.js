import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import Context from '../context'

export default function FavoriteCity({ city, changeFavoriteName }) {

    const { favoriteName } = useContext(Context)
    console.log(favoriteName)
    const [favoriteCityPressed, setFavoriteCityPressed] = useState(false)

    let isFavoriteCityPressed

    if(favoriteName === city) {
        isFavoriteCityPressed = true
    } else {
        isFavoriteCityPressed = false
    }
    
    const favoriteCity = classNames({
        'favorite-city': true,
        'favorite-city_pressed': isFavoriteCityPressed
    })
    
    function showFavoriteCityPressed() {
        
        isFavoriteCityPressed = true
        changeFavoriteName(city)
        setFavoriteCityPressed(true)
        console.log('show.....')
    }

    return (
        <div 
          className={favoriteCity}
          onClick={() => showFavoriteCityPressed()}>
            <span>{city}</span>
        </div>
    )
}