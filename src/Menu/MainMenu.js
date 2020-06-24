import React, { useContext } from 'react'
import './main-menu.scss'
import Context from '../context'

export default function MainMenu() {
    const { mainMenuActiveBtn } = useContext(Context)
    console.log(mainMenuActiveBtn)
    return (
        <div className='main-menu'>
            <button className='main-menu__button button-now button_active'>Now</button>
            <button className='main-menu__button button-details'>Details</button>
            <button className='main-menu__button button-forecast'>Forecast</button>
        </div>
    )
}