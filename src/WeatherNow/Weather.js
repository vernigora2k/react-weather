import React, { useContext, useState, useEffect } from 'react'
import './weather.scss'
import Context from '../context'
import { getWeather, getLocalTime } from '../js/controller'

export default function Weather() {
    const { searchFormValue, changeTime, mainMenuActiveBtn } = useContext(Context)
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
    
    if(mainMenuActiveBtn == 'now') {
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

    if(mainMenuActiveBtn == 'details') {
        return (
            <div className='weather flex'>
                <div className='weather__temp'>{Math.round(state.temp)}<sup>0</sup></div>
                <div className='weather__icon flex'>
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

                <div className="media__details hidden">
                            <table className="table-details" width='298px' height='198px'>
                                <tr>
                                    <td className="cell-prop-wind">
                                        <div className="flex">
                                            <img src="./src/img/wind.svg" alt="wind" width="50px" style={{paddingTop: 3 +'px'}} ></img>
                                            <span className="wind-dir">north</span>
                                            <span className="wind-speed"></span>
                                        </div>
                                    </td>
                                    <td className="cell-prop-pres">
                                        <div className="flex">
                                            <img src="./src/img/pressure.svg" alt="pressure" width="40px"></img>
                                            <span className="pressure">780 mb</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cell-prop-sunrize">
                                        <div className="flex">
                                            <img src="./src/img/sun.svg" alt="sunrize" width="20px"></img>
                                            <span className="sunrize">sunrize</span>
                                            <img src="./src/img/moon.svg" alt="sunset" width="20px"></img>
                                            <span className="sunset">sunset</span>
                                        </div>
                                    </td>
                                    <td className="cell-prop-solarrad">
                                        <div className="flex">
                                            <div>
                                                <img src="./src/img/sun.svg" alt="sun" width="25px"></img>
                                                <img src="./src/img/radiation.svg" alt="radiation" width="25px"></img>
                                            </div>
                                            <div>
                                                <span style={{fontSize: 19 +'px'}}>solar-radiation</span>
                                            </div>
                                                <span className="radiation"></span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>



            </div>            
        )
    }
}