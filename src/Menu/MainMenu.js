import React from 'react'

export default function MainMenu() {
    return (
        <div className='main-menu'>
            <button className='main-menu__button button-now'>Now</button>
            <button className='main-menu__button button-details'>Details</button>
            <button className='main-menu__button button-forecast'>forecast</button>
        </div>
    )
}