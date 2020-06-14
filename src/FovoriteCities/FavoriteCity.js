import React from 'react'

export default function FavoriteCity({ city }) {
    return (
        <div 
          className='favorite-city'>
            <span>{city}</span>
        </div>
    )
}