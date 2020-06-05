import React from 'react'
import './display-now.scss'

export default function DisplayNow() {
    return (
        <div className='display-now'>
            <div className='display-now__temp'>35deg</div>
            <div className='display-now__icon flex'>
                <div className='display-now__icon-description'>clouds</div>
                <div className='display-now__icon-img'>
                    <img className='icon-img' src={'weather-icons/c01d.png'} alt='icon-img' width='140px'></img>
                </div>
            </div>
        </div>
    )
}