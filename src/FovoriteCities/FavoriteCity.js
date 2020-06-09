import React from 'react'

export default function FavoriteCity({ city }) {
    const myRef = React.createRef()
    
    if(!!!city) {
        return null
    }

    return (
        <div 
          className='favorite-city' 
          ref={myRef}>
            <span>{city}</span>
        </div>
    )
}