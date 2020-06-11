import React, { useState } from 'react'
import './favorite-city-list.scss'
import FavoriteCity from './FavoriteCity'

export default function FavoriteCityList({ citiesList }) {
    
    return (
        <div className='favorite-cities'>
            <div className='favorite-cities__title'>
                <span>Added Locations:</span>
            </div>
            <div className='favorite-cities__list flex'>
                {citiesList.forEach((city,i) => {
                    return <FavoriteCity city={city} key={i}></FavoriteCity>
                })}
            </div>
        </div>
    )
}


