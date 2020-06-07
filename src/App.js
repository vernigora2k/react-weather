import React from 'react'
import { useState } from 'react'
import SearchForm from './Search/SearchForm'
import LocalTime from './Search/LocalTime'
import DisplayNow from './WeatherNow/DisplayNow'
import DisplayFavorite from './WeatherNow/DisplayFavorite'
import MainMenu from './Menu/MainMenu'
import FavoriteCities from './FovoriteCities/FavoriteCities'

function App() {
    let [favoriteActive, setFavoriteActive] = useState({favoriteName: 'London', favoriteActivated: false})
  
    function changeFavorite(response) {
        console.log('CHANGE FAVORITE ' + typeof(response))
        console.log(response)
        if(response === 'clickOnHeart' && favoriteActive.favoriteActivated) {
            setFavoriteActive(
                {favoriteName: 'London', favoriteActivated: false}
            )
        } else {
            setFavoriteActive(
                {favoriteName: 'London', favoriteActivated: true}
            )
        }
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
                          favoriteActive={favoriteActive} 
                          onChange={changeFavorite}>
                        </DisplayFavorite>
                    </div>
                    <div className='main-body__menu'>
                        <MainMenu></MainMenu>
                    </div>
                </div>
                <div className='main-body__favorite-cities'>
                    <FavoriteCities 
                      favoriteActive={favoriteActive}>
                    </FavoriteCities>
                </div>
            </div>
        </div>
    )
}

export default App