import React, { useContext } from 'react'
import './main-menu.scss'
import Context from '../context'

export default function MainMenu() {
    const { mainMenuActiveBtn, menuBtnPressed } = useContext(Context)
    let buttonNowActive = ''
    let buttonDetailsActive = ''
    let buttonForecastActive = ''

    console.log(mainMenuActiveBtn)

    switch(mainMenuActiveBtn) {
        case 'now':
            buttonNowActive = 'button_active'
            break
        case 'details':
            buttonDetailsActive = 'button_active'
            break
        case 'forecast':
            buttonForecastActive = 'button_active'
            break
    }

    function showBtnPressed(btn) {
        menuBtnPressed(btn)
    }

    return (
        <div className='main-menu'>
            <button 
              className={`main-menu__button button-now ${buttonNowActive}`}
              onClick={() => showBtnPressed('now')}
            >
            Now
            </button>
            <button 
              className={`main-menu__button button-details ${buttonDetailsActive}`}
              onClick={() => showBtnPressed('details')}
            >
            Details
            </button>
            <button 
              className={`main-menu__button button-details ${buttonForecastActive}`}
              onClick={() => showBtnPressed('forecast')}
            >
            Forecast
            </button>
        </div>
    )
}