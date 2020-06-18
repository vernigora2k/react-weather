import React, { useContext } from 'react'
import './weather.scss'
import Context from '../context'
import { getWeather, getLocalTime } from '../js/controller'



export default function Weather() {
    const { searchFormValue } = useContext(Context)
    showWeather(searchFormValue)

    function showWeather(city) {
        console.log(city)
        getWeather(city)
        .then(response => {
            const data = response.data[0]
            const {temp, weather: {description, icon}, timezone, wind_cdir_full, wind_spd, pres, sunrise, sunset, solar_rad} = data
            getLocalTime(timezone)
                .then(response => {
                    console.log(response.datetime.slice(11,16))
                })
                .catch('errorHandler')
            })
        .catch('errorHandler')
    }

    return (
        <div className='weather'>
            <div className='weather__temp'>35deg</div>
            <div className='weather__icon flex'>
                <div className='weather__icon-description'>clouds</div>
                <div className='weather__icon-img'>
                    <img className='icon-img' src={'weather-icons/c01d.png'} alt='icon-img' width='140px'></img>
                </div>
            </div>
        </div>
    )
}