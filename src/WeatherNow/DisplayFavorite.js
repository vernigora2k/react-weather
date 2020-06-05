import React from 'react'
import './display-favorite.scss'

export default function DisplayFavorite() {
    return (
        <div className='display-favorite flex'>
            <div className='display-favorite__city'>
                <span className='display-favorite__active-city'>aktobe</span>
            </div>
            <div className='display-favorite__heart-img heart-img_active'></div>
        </div>
    )
}