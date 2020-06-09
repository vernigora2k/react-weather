import React from 'react'

export default function FavoriteCity({ city }) {
    if(!!!city) {
        return null
    }

    return (
        <div 
          className='favorite-city'>
            <span>{city}</span>
        </div>
    )
}