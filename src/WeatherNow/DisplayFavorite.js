import React from 'react'
import './display-favorite.scss'

function DisplayFavorite({ favoriteName, favoriteNameActive, onChange }) {
    const classes = []

    if(favoriteNameActive) {
        classes.push('display-favorite__heart-img heart-img_active')
    } else {
        classes.push('display-favorite__heart-img')
    }
    
    return (
        <div className='display-favorite flex'>
            <div className='display-favorite__city'>
                <span className='display-favorite__active-city'>{favoriteName}</span>
            </div>
            <div 
              className={classes} 
              onClick={() => {
                  onChange()
                  }}
            >
            </div>
        </div>
    )
}

export default DisplayFavorite