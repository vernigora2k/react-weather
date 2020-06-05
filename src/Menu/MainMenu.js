import React from 'react'
import './main-menu.scss'

export default function MainMenu() {
    return (
        <div className='main-menu'>
            <button className='main-menu__button button-now button_active'>Now</button>
            <button className='main-menu__button button-details'>Details</button>
            <button className='main-menu__button button-forecast'>Forecast</button>
        </div>
    )
}