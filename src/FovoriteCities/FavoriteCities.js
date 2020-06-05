import React from 'react'
import './favorite-cities.scss'

export default function FavoriteCities() {
    return (
        <div className='favorite-cities'>
            <div className='favorite-cities__title'>
                <span>Added Locations:</span>
            </div>
            <div className='favorite-cities__list flex'>
                <div className='favorite-city'><span>London</span></div>
                <div className='favorite-city'><span>London</span></div>
                <div className='favorite-city'><span>London</span></div>
                <div className='favorite-city'><span>London</span></div>
            </div>
        </div>
    )
}