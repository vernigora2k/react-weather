import React, { useContext } from 'react'
import './main-menu.scss'
import { connect } from 'react-redux'

function MainMenu(props) {
    let buttonNowActive = ''
    let buttonDetailsActive = ''
    let buttonForecastActive = ''
    const {mainMenuActiveBtn} = props.mainMenuActiveBtn

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
        default:
            buttonNowActive = 'button_active'
    }

    return (
        <div className='main-menu'>
            <button 
              className={`main-menu__button button-now ${buttonNowActive}`}
              onClick={() => {
                    //showBtnPressed('now')
                    props.dispatch({ type: 'NOW_BTN'})
                    }}
            >
            Now
            </button>
            <button 
              className={`main-menu__button button-details ${buttonDetailsActive}`}
              onClick={() => {
                    //showBtnPressed('details')
                    props.dispatch({ type: 'DETAILS_BTN'})
                    }}
            >
            Details
            </button>
            <button 
              className={`main-menu__button button-details ${buttonForecastActive}`}
              onClick={() => {
                    //showBtnPressed('forecast')
                    props.dispatch({ type: 'FORECAST_BTN'})
                    }}
            >
            Forecast
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    mainMenuActiveBtn: state.mainMenuActiveBtn
})
export default connect(mapStateToProps)(MainMenu)