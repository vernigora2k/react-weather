import React from 'react'
import './favorite-city-list.scss'
import FavoriteCity from './FavoriteCity'

export default function FavoriteCityList({ citiesList, onChangeFavorite }) {
    let isCityListEmpty = !citiesList.size

    return (
        <div className='favorite-cities'>
            <div className='favorite-cities__title'>
                <span>Added Locations:</span>
            </div>
            <div className='favorite-cities__list flex'>
                {isCityListEmpty 
                    ? undefined 
                    : ([...citiesList].map(city => {
                        return <FavoriteCity city={city} key={city} changeFavoriteName={onChangeFavorite}></FavoriteCity>
                      }))
                }
            </div>
        </div>
    )
}


