import React, { useEffect, useState } from 'react'
import './ForecastPlates.scss'
import { getWeather } from '../js/controller'
import { connect } from 'react-redux'

 function ForecastPlates({ forecastInterval, searchFormValue }) {
    const [state, setState] = useState('')
    const days = forecastInterval

    useEffect(() => {
        getWeather(searchFormValue, 'forecast')
        .then(response => {
            setState(response)
        })
        .catch('errorHandler')

    }, [searchFormValue])

    if(state.city_name) {
        const { data } = state
        const plates = data.map((forecastDay,i) => {
            if(i<days) {
                const {datetime, high_temp, low_temp, pop, weather: {description}} = forecastDay
                return (
                    <div className='forecastDay' key={datetime}>
                        <p className='datetime'>{datetime}</p>
                        <p className='highTemp'>max temp: {Math.round(high_temp)}</p>
                        <p className='lowtemp'>low temp: {Math.round(low_temp)}</p>
                        <p className='pop'>Prob.of.Prec. :{pop}</p>
                        <p className='forecastDescription'>{description}</p>
                    </div>
                )
            }
        });
        return plates
    }
    return null
}

const mapStateToProps = state => {
    return state.searchFormValue
}

export default connect(mapStateToProps)(ForecastPlates)