import React from 'react'
import SearchForm from './Search/SearchForm'
import LocalTime from './Search/LocalTime'
import DisplayNow from './WeatherNow/DisplayNow'
import DisplayFavorite from './WeatherNow/DisplayFavorite'
import MainMenu from './Menu/MainMenu'
import FavoriteCities from './FovoriteCities/FavoriteCities'

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
                    <div className='main-body__display'>
                        <DisplayNow></DisplayNow>
                        <DisplayFavorite></DisplayFavorite>
                    </div>
                    <div className='main-body__menu'>
                        <MainMenu></MainMenu>
                    </div>
                </div>
                <div className='main-body__favorite-cities'>
                    <FavoriteCities></FavoriteCities>
                </div>
            </div>
        </div>
    )
}

export default App