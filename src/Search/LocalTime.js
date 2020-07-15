import React from 'react'
import './local-time.scss'
import { connect } from 'react-redux'

function LocalTime({time}) {
    return (
        <div className='local-time'>
            <span className='time'>{time}</span>
        </div>
    )
}

const mapStateToProps = state => ({
    time: state.time.time
})

export default connect(mapStateToProps)(LocalTime)