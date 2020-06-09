import React from 'react'

export default function FavoriteCity({ city }) {
    const myRef = React.createRef()

    return (
        <div 
          className='favorite-city' 
          ref={myRef}>
            <span>{city}</span>
        </div>
    )
}