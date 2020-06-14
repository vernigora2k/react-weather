import React from 'react'
import './favorite-city-menu.scss'

function FavoriteCityMenu({ searchFormValue, favoriteNameActive, onChange }) {
    const classes = []

    if(favoriteNameActive) {
        classes.push('favorite-city-menu__heart-img heart-img_active')
    } else {
        classes.push('favorite-city-menu__heart-img')
    }
    
    return (
        <div className='favorite-city-menu flex'>
            <div className='favorite-city-menu__city'>
                <span 
                  className='favorite-city-menu__active-city'
                  id='favorite-city-menu__active-city'>
                    {searchFormValue}
                </span>
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

export default FavoriteCityMenu