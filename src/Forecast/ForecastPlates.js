import React, { useContext, useEffect, useState } from 'react'
import './ForecastPlates.scss'
import Content from '../context'
import { getWeather } from '../js/controller'

export default function ForecastPlates() {
    const [state, setState] = useState('')
    const { searchFormValue } = useContext(Content)

    useEffect(() => {
        getWeather(searchFormValue, 'forecast')
        .then(response => {
            setState(response)
            console.log(response)
        })
        .catch('errorHandler')
    }, [searchFormValue])

    if(state.city_name) {
        console.log('is there data')
    }

    return (
        <div></div>
    )
}