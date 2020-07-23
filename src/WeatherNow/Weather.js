import React, { useState, useEffect } from 'react'
import './weather.scss'
import ForecastPlates from '../Forecast/ForecastPlates'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { timeSagas, newWeatherData, weatherSagas } from '../Redux/actions'

function Weather({ searchFormValue, mainMenuActiveBtn, weatherData, weatherActions }) {
    const [forecastInterval, setForecastInterval] = useState(7)
    const { temp, wind_cdir_full, wind_spd, pres, sunrise, sunset, solar_rad, weather: {description, icon} } = weatherData.data

    useEffect(() => {
        weatherActions(searchFormValue)
    }, [searchFormValue])

    function showBtnPressed(interval) {
        setForecastInterval(interval)
    }
        
    if(mainMenuActiveBtn === 'now') {
        return (
            <div className='weather'>
                <div className='weather__temp'>{Math.round(temp)}<sup>0</sup></div>
                <div className='weather__icon flex'>
                    <div className='weather__icon-description'>{description}</div>
                    <div className='weather__icon-img'>
                        <img 
                        className='icon-img' 
                        src={require(`./img/weather-icons/${icon}.png`)} 
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
                <div className='weather__temp'>{Math.round(temp)}<sup>0</sup></div>
                <div className='weather__icon flex' style={{marginRight: 20 +'px'}}>
                    <div className='weather__icon-description_details'>{description}</div>
                    <div className='weather__icon-img'>
                        <img 
                        className='icon-img' 
                        src={require(`./img/weather-icons/${icon}.png`)} 
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
                                    <span className="wind-dir">{wind_cdir_full}</span>
                                    <span className="wind-speed">{Math.round(wind_spd)} m/s</span>
                                </div>
                            </td>
                            <td className="cell-prop-pres">
                                <div className="flex">
                                    <img src={require(`./Details/img/pressure.svg`)} alt="pressure" width="40px"></img>
                                    <span className="pressure">{Math.round(pres)} mb</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="cell-prop-sunrize">
                                <div className="flex">
                                    <img src={require(`./Details/img/sun.svg`)} alt="sunrize" width="20px"></img>
                                    <span className="sunrize">{sunrise}</span>
                                    <img src={require(`./Details/img/moon.svg`)} alt="sunset" width="20px"></img>
                                    <span className="sunset">{sunset}</span>
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
                                        <span className="radiation">{Math.round(solar_rad)} W/m^2</span>
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
    time: state.time,
    weatherData: state.weatherData
})

const mapDispatchToProps = dispatch => {
    return {
        timeActions: bindActionCreators(timeSagas, dispatch),
        newDataActions: bindActionCreators(newWeatherData, dispatch),
        weatherActions: bindActionCreators(weatherSagas, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)