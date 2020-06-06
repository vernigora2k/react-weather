import React from 'react'
import './display-favorite.scss'

function DisplayFavorite({ favoriteActive, onChange }) {
    const classes = []

    if(favoriteActive.favoriteActivated) {
        classes.push('display-favorite__heart-img heart-img_active')
    } else {
        classes.push('display-favorite__heart-img')
    }
    
    return (
        <div className='display-favorite flex'>
            <div className='display-favorite__city'>
                <span className='display-favorite__active-city'>aktobe</span>
            </div>
            <div 
              className={classes} 
              onClick={() => {
                  onChange('clickOnHeart')
                  }}
            >
            </div>
        </div>
    )
}

export default DisplayFavorite