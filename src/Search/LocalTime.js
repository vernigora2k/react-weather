import React, { useContext } from 'react'
import './local-time.scss'
import Context from '../context'

export default function LocalTime() {
    const { time } = useContext(Context)
    return (
        <div className='local-time'>
            <span className='time'>{time}</span>
        </div>
    )
}