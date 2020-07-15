import React, { useContext } from 'react'
import './main-menu.scss'
import { connect } from 'react-redux'

function MainMenu({mainMenuActiveBtn, dispatch}) {

    const checkButtonActive = button => mainMenuActiveBtn === button ? 'button_active' : ''

    return (
        <div className='main-menu'>
            <button 
              className={`main-menu__button button-now ${checkButtonActive('now')}`}
              onClick={() => dispatch({ type: 'NOW_BTN'})}
            >
            Now
            </button>
            <button 
              className={`main-menu__button button-details ${checkButtonActive('details')}`}
              onClick={() => dispatch({ type: 'DETAILS_BTN'})}
            >
            Details
            </button>
            <button 
              className={`main-menu__button button-details ${checkButtonActive('forecast')}`}
              onClick={() => dispatch({ type: 'FORECAST_BTN'})}
            >
            Forecast
            </button>
        </div>
    )
}

const mapStateToProps = state => (
    state.mainMenuActiveBtn
)

export default connect(mapStateToProps)(MainMenu)