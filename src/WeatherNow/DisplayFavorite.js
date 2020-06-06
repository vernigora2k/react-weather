import React from 'react'
import './display-favorite.scss'

function DisplayFavorite({ favoriteActive, onChange }) {
    const classes = []

    // if(activeCity.isFavorite) {
    //     classes.push('heart-img_active')
    // }

    return (
        <div className='display-favorite flex'>
            <div className='display-favorite__city'>
                <span className='display-favorite__active-city'>aktobe</span>
            </div>
            <div 
              className='display-favorite__heart-img heart-img_active' 
              onClick={() => {
                  onChange('clickOnHeart')
                  console.log(favoriteActive)
                  }}
            >
            </div>
        </div>
    )
}

export default DisplayFavorite