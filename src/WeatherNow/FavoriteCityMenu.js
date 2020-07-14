import React from 'react'
import './favorite-city-menu.scss'
import { connect } from 'react-redux'

function FavoriteCityMenu({ searchFormValue, favoriteNameActive, onChange }) {
    let classes;
    
    if(favoriteNameActive) {
        classes = 'favorite-city-menu__heart-img heart-img_active'
    } else {
        classes = 'favorite-city-menu__heart-img'
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
              onClick={onChange}
            >
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return state.searchFormValue
}

export default connect(mapStateToProps)(FavoriteCityMenu)