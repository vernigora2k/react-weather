import React from 'react'
import './favorite-city-list.scss'
import FavoriteCity from './FavoriteCity'

export default function FavoriteCityList({ favoriteName, favoriteNameActive }) {
    let city = ''

    console.log(favoriteNameActive)
    
    if(favoriteNameActive) {
        city = favoriteName
    } else {
        city = ''
    }

    return (
        <div className='favorite-cities'>
            <div className='favorite-cities__title'>
                <span>Added Locations:</span>
            </div>
            <div className='favorite-cities__list flex'>
                <FavoriteCity city={city}></FavoriteCity>
            </div>
        </div>
    )
}


