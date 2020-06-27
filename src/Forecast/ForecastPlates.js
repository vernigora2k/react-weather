import React, { useContext, useEffect, useState } from 'react'
import './ForecastPlates.scss'
import Content from '../context'
import { getWeather } from '../js/controller'

export default function ForecastPlates(forecastInterval) {
    const [state, setState] = useState('')
    const { searchFormValue } = useContext(Content)
    let days

    useEffect(() => {
        getWeather(searchFormValue, 'forecast')
        .then(response => {
            setState(response)
            console.log(response)
        })
        .catch('errorHandler')
    }, [searchFormValue])

    if(forecastInterval.forecastInterval === 'seven') {
        days = 7
    }   else {
        days = 14
    }

    if(state.city_name) {
        console.log('is there data')
        const { city_name, timezone, data } = state
        data.forEach((forecastDay,i) => {
            if(i<days) {
                const {datetime, high_temp, low_temp, pop, weather: {description}} = forecastDay
                console.log(description)
                console.log(i, '  ', days)
            }
        });
    }

    console.log(forecastInterval)

    return (
        <div></div>
    )
}