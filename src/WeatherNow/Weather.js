import React from 'react'
import './weather.scss'
import { getWeather, getLocalTime } from '../js/controller'

export function showWeather(city) {
    getWeather(city)
    .then(response => {
        const data = response.data[0]
        const {temp, weather: {description, icon}, timezone, wind_cdir_full, wind_spd, pres, sunrise, sunset, solar_rad} = data
        // mainScreenTemp.textContent = Math.round(temp)
        // mainScreenWeatherDescription.textContent = description
        // mainScreenWeatherIcon.src = `src/img/weather-icons/${icon}.png`
        // mainScreenActivatedCity.textContent = searchFormInput.value
        // windDir.textContent = wind_cdir_full 
        // windSpeed.textContent = Math.round(wind_spd) + ' m/s'
        // pressure.textContent = Math.round(pres) + ' mb'
        // sunriseProp.textContent = sunrise
        // sunsetProp.textContent = sunset
        // radiation.textContent = Math.round(solar_rad) + ' W/m^2'
        getLocalTime(timezone)
            .then(response => {
                //mainScreenTime.textContent = response.datetime.slice(11,16)
                console.log(response.datetime.slice(11,16))
            })
            .catch('errorHandler')
        //localStorage.setItem('lastWatchedCity', city)
        })
    // .then(() => {
    //     if(checkfavoriteCityDublicate(mainScreenActivatedCity.textContent)) {
    //         iconHeartImg.src = 'src/img/heart-black.svg'
    //     } else {
    //         iconHeartImg.src = 'src/img/heart-white.svg'
    //     }
    // })
    .catch('errorHandler')
}


export default function Weather() {
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