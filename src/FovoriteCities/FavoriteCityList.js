import React, { useState } from 'react'
import './favorite-city-list.scss'
import FavoriteCity from './FavoriteCity'

export default function FavoriteCityList({ favoriteName, favoriteNameActive, citiesList }) {
    const myRef = React.createRef()
    // let city = ''

    // if(favoriteNameActive) {
    //     city = favoriteName
    //     //setCitiesList(...citiesList, favoriteName)
    //     //console.log(citiesList)
    // } else {
    //     city = ''
    // }
    //////<FavoriteCity city={city}></FavoriteCity>

    return (
        <div className='favorite-cities'>
            <div className='favorite-cities__title'>
                <span>Added Locations:</span>
            </div>
            <div className='favorite-cities__list flex'>
                {citiesList.map((city,i) => {
                    console.log(city)
                    return <FavoriteCity city={city} key={i}></FavoriteCity>
                })}
            </div>
        </div>
    )
}

