import React from 'react'

function App() {
    return (
        <div className='wrapper'>
            <div className='search-body'>
                <div className='search-body__search-form'></div>
                <div className='search-body__local-time'></div>
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