import React, { useState, useEffect } from 'react'
import './weather.scss'
import { getWeather, getLocalTime } from '../js/controller'
import ForecastPlates from '../Forecast/ForecastPlates'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newLocalTime } from '../Redux/actions'

function Weather({ searchFormValue, mainMenuActiveBtn, localTimeActions }) {
    const [forecastInterval, setForecastInterval] = useState(7)
    const [state, setState] = useState('')

    let description
    let iconImg = 'c01d'

    useEffect(() => {
        getWeather(searchFormValue)
        .then(response => {
            const data = response.data[0]
            setState(data)
            getLocalTime(data.timezone)
                .then(response => {
                    localTimeActions(response.datetime.slice(11,16))
                })
                .catch('errorHandler')
        })
        .catch('errorHandler')
    }, [searchFormValue])

    


    if (state.weather) {
        description = state.weather.description
        iconImg = state.weather.icon
    }
    
    function showBtnPressed(interval) {
        setForecastInterval(interval)
    }

    if(mainMenuActiveBtn === 'now') {
        return (
            <div className='weather'>
                <div className='weather__temp'>{Math.round(state.temp)}<sup>0</sup></div>
                <div className='weather__icon flex'>
                    <div className='weather__icon-description'>{description}</div>
                    <div className='weather__icon-img'>
                        <img 
                        className='icon-img' 
                        src={require(`./img/weather-icons/${iconImg}.png`)} 
                        alt='icon-img' 
                        width='140px'
                        >
                        </img>
                    </div>
                </div>
            </div>
        )
    }

    if(mainMenuActiveBtn === 'details') {
        return (
            <div className='weather flex' style={{justifyContent: 'space-between'}}>
                <div className='weather__temp'>{Math.round(state.temp)}<sup>0</sup></div>
                <div className='weather__icon flex' style={{marginRight: 20 +'px'}}>
                    <div className='weather__icon-description_details'>{description}</div>
                    <div className='weather__icon-img'>
                        <img 
                        className='icon-img' 
                        src={require(`./img/weather-icons/${iconImg}.png`)} 
                        alt='icon-img' 
                        width='80px'
                        >
                        </img>
                    </div>
                </div>

                <div className="media__details">
                    <table className="table-details" width='300px' height='200px'>
                        <tr>
                            <td className="cell-prop-wind">
                                <div className="flex">
                                    <img src={require(`./Details/img/wind.svg`)} alt="wind" width="50px" style={{paddingTop: 3 +'px'}} ></img>
                                    <span className="wind-dir">{state.wind_cdir_full}</span>
                                    <span className="wind-speed">{Math.round(state.wind_spd)} m/s</span>
                                </div>
                            </td>
                            <td className="cell-prop-pres">
                                <div className="flex">
                                    <img src={require(`./Details/img/pressure.svg`)} alt="pressure" width="40px"></img>
                                    <span className="pressure">{Math.round(state.pres)} mb</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="cell-prop-sunrize">
                                <div className="flex">
                                    <img src={require(`./Details/img/sun.svg`)} alt="sunrize" width="20px"></img>
                                    <span className="sunrize">{state.sunrise}</span>
                                    <img src={require(`./Details/img/moon.svg`)} alt="sunset" width="20px"></img>
                                    <span className="sunset">{state.sunset}</span>
                                </div>
                            </td>
                            <td className="cell-prop-solarrad">
                                <div className="flex">
                                    <div>
                                        <img src={require(`./Details/img/sun.svg`)} alt="sun" width="25px"></img>
                                        <img src={require(`./Details/img/radiation.svg`)} alt="radiation" width="25px"></img>
                                    </div>
                                    <div>
                                        <span style={{fontSize: 19 +'px'}}>solar-radiation</span>
                                    </div>
                                        <span className="radiation">{Math.round(state.solar_rad)} W/m^2</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>            
        )
    }

    if(mainMenuActiveBtn === 'forecast') {
        return (
            <div className="weather">
                <div className="media__forecast">
                    <div className="forecast-menu flex">
                        <div 
                            className={`forecast-seven ${forecastInterval === 7 ? 'forecast--active' : ''}`}  
                            style={{ width: 50 +'%', height: 30 +'px' }}
                        >
                            <button className="seven" onClick={() => showBtnPressed(7)}>forecast seven</button>
                        </div>
                        <div 
                            className={`forecast-two-weeks ${forecastInterval === 14 ? 'forecast--active' : ''}`} 
                            style={{ width: 50 +'%', height: 30 +'px' }}
                        >
                            <button className="two-weeks" onClick={() => showBtnPressed(14)}>forecast 2 weeks</button>
                        </div>
                    </div>
                    <div className="forecast-desk flex">
                        <ForecastPlates forecastInterval={forecastInterval}></ForecastPlates>
                    </div>
                </div>
            </div>
        )
    }
    return null
}

const mapStateToProps = state => ({
    mainMenuActiveBtn: state.mainMenuActiveBtn.mainMenuActiveBtn, 
    searchFormValue: state.searchFormValue.searchFormValue,
    time: state.time
})

const mapDispatchToProps = dispatch => {
    return {
        localTimeActions: bindActionCreators(newLocalTime, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)