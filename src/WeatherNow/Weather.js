import React, { useContext, useState, useEffect } from 'react'
import './weather.scss'
import Context from '../context'
import { getWeather, getLocalTime } from '../js/controller'

export default function Weather() {
    const { searchFormValue, changeTime } = useContext(Context)
    const [state, setState] = useState('')
    let description

    
    useEffect(() => {
        getWeather(searchFormValue)
        .then(response => {
            const data = response.data[0]
            //const {temp, weather: {description, icon}, timezone, wind_cdir_full, wind_spd, pres, sunrise, sunset, solar_rad} = data 
            setState(data)
            // setState(temp, description, icon, timezone, wind_cdir_full, wind_spd, pres, sunrise, sunset, solar_rad)
            console.log(data.timezone)
            getLocalTime(data.timezone)
                .then(response => {
                    changeTime(response.datetime.slice(11,16))
                })
                .catch('errorHandler')
        })
        .catch('errorHandler')
    }, [searchFormValue])

    console.log(Math.round(state.temp))
    if (state.weather) {
        console.log(state.weather.description)
        description = state.weather.description
    }
    

    return (
        <div className='weather'>
            <div className='weather__temp'>{Math.round(state.temp)}<sup>0</sup></div>
            <div className='weather__icon flex'>
                <div className='weather__icon-description'>{description}</div>
                <div className='weather__icon-img'>
                    <img className='icon-img' src={'weather-icons/c01d.png'} alt='icon-img' width='140px'></img>
                </div>
            </div>
        </div>
    )
}