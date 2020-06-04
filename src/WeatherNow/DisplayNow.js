import React from 'react'

export default function DisplayNow() {
    return (
        <div className='display-now'>
            <div className='display-now__temp'></div>
            <div className='display-now__icon'>
                <div className='display-now__icon-description'></div>
                <div className='display-now__icon-img'></div>
            </div>
        </div>
    )
}