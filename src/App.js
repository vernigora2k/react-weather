import React from 'react'
import { useState } from 'react'
import SearchForm from './Search/SearchForm'
import LocalTime from './Search/LocalTime'
import DisplayNow from './WeatherNow/DisplayNow'
import DisplayFavorite from './WeatherNow/DisplayFavorite'
import MainMenu from './Menu/MainMenu'
import FavoriteCities from './FovoriteCities/FavoriteCities'

function App() {
    let [favoriteName, setFavoriteName] = useState('Lilu')
    let [favoriteNameActive, setFavoriteNameActive] = useState(false)

    function changeFavoriteNameActive() {
        setFavoriteNameActive((data) => !(data)) 
    }

    return (
        <div className='wrapper'>
            <div className='search-body flex'>
                <div className='search-body__search-form'>
                    <SearchForm></SearchForm>
                </div>
                <div className='search-body__local-time'>
                    <LocalTime></LocalTime>
                </div>
            </div>
            <div className='main-body flex'>
                <div className='main-body__media flex'>
                    <div className='main-body__display flex'>
                        <DisplayNow></DisplayNow>
                        <DisplayFavorite 
                          favoriteNameActive={favoriteNameActive} 
                          onChange={changeFavoriteNameActive}>
                        </DisplayFavorite>
                    </div>
                    <div className='main-body__menu'>
                        <MainMenu></MainMenu>
                    </div>
                </div>
                <div className='main-body__favorite-cities'>
                    <FavoriteCities 
                      favoriteName={favoriteName}>
                    </FavoriteCities>
                </div>
            </div>
        </div>
    )
}

export default App