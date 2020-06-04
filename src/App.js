import React from 'react'
import SearchForm from './Search/SearchForm'
import LocalTime from './Search/LocalTime'

function App() {
    return (
        <div className='wrapper'>
            <div className='search-body'>
                <div className='search-body__search-form'>
                    <SearchForm></SearchForm>
                </div>
                <div className='search-body__local-time'>
                    <LocalTime></LocalTime>
                </div>
            </div>
            <div className='main-body'>
                <div className='main-body__media'>
                    <div className='main-body__display'></div>
                    <div className='main-body__menu'></div>
                </div>
                <div className='main-body__favorite-cities'></div>
            </div>
        </div>
    )
}

export default App