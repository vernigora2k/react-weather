import React from 'react'
import './weather.scss'

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