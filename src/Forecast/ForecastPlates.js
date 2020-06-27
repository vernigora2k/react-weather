import React, { useContext, useEffect, useState } from 'react'
import './ForecastPlates.scss'
import Content from '../context'
import { getWeather } from '../js/controller'

export default function ForecastPlates(forecastInterval) {
    const [state, setState] = useState('')
    const { searchFormValue } = useContext(Content)
    let days

    if(forecastInterval.forecastInterval === 'seven') {
        days = 7
    }   else {
        days = 14
    }

    useEffect(() => {
        getWeather(searchFormValue, 'forecast')
        .then(response => {
            setState(response)
        })
        .catch('errorHandler')

    }, [searchFormValue])

    if(state.city_name) {
        const { city_name, timezone, data } = state
        let plates = data.map((forecastDay,i) => {
            if(i<days) {
                const {datetime, high_temp, low_temp, pop, weather: {description}} = forecastDay
                return (
                    <div className='forecastDay'>
                        <p className='datetime'>{datetime}</p>
                        <p className='highTemp'>{Math.round(high_temp)}</p>
                    </div>
                )
            }
        });
        return (plates)
    }
    return (<div></div>)
}