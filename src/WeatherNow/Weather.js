import React, { useContext, useState, useEffect } from 'react'
import './weather.scss'
import Context from '../context'
import { getWeather, getLocalTime } from '../js/controller'
import ForecastPlates from '../Forecast/ForecastPlates'
import { checkPropTypes } from 'prop-types'
import { connect } from 'react-redux'

function Weather(props) {
    const [forecastInterval, setForecastInterval] = useState('seven')
    const { searchFormValue, changeTime, mainMenuActiveBtn } = useContext(Context)
    const [state, setState] = useState('')
    
    let forecastSeven = ''
    let forecastTwoWeeks = ''
    let description
    let iconImg = 'c01d'

    useEffect(() => {
        getWeather(searchFormValue)
        .then(response => {
            const data = response.data[0]
            setState(data)
            getLocalTime(data.timezone)
                .then(response => {
                    changeTime(response.datetime.slice(11,16))
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

    switch(forecastInterval) {
        case 'seven':
            forecastSeven = 'forecast--active'
            break
        case 'two-weeks':
            forecastTwoWeeks = 'forecast--active'
            break
        default:
            forecastSeven = 'forecast--active'
    }

    if(mainMenuActiveBtn === 'now') {
        return (
            <div className='weather'>
                <div className='weather__temp'>{Math.round(state.temp)}<sup>0</sup></div>
                <div className='weather__icon flex'>
                {props.testRedux} {props.testNeoRedux}
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
                        <div className={`forecast-seven ${forecastSeven}`}  style={{ width: 50 +'%', height: 30 +'px' }}>
                            <button className="seven" onClick={() => showBtnPressed('seven')}>forecast seven</button>
                        </div>
                        <div className={`forecast-two-weeks ${forecastTwoWeeks}`} style={{ width: 50 +'%', height: 30 +'px' }}>
                            <button className="two-weeks" onClick={() => showBtnPressed('two-weeks')}>forecast 2 weeks</button>
                        </div>
                    </div>
                    <div className="forecast-desk flex">
                        <ForecastPlates forecastInterval={forecastInterval}></ForecastPlates>
                    </div>
                </div>
            </div>
        )
    }
}

//export default Weather

const mapStateToProps = state => ({
    testRedux: state.id, 
    testNeoRedux: state.idNeo
})
export default connect(mapStateToProps)(Weather)