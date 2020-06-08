import React from 'react'
import { useState } from 'react'
import SearchForm from './Search/SearchForm'
import LocalTime from './Search/LocalTime'
import DisplayNow from './WeatherNow/DisplayNow'
import DisplayFavorite from './WeatherNow/DisplayFavorite'
import MainMenu from './Menu/MainMenu'
import FavoriteCities from './FovoriteCities/FavoriteCities'

function App() {
    let [searchFormValue, setSearchFormValue] = useState('Aktobe')
    let [favoriteName, setFavoriteName] = useState(searchFormValue)
    let [favoriteNameActive, setFavoriteNameActive] = useState(false)

    function changeFavoriteNameActive() {
        setFavoriteNameActive((data) => !(data)) 
    }

    // function changeFavoriteName() {
    //     setFavoriteName(searchFormValue)
    // }

    function changeInputValue(response) {
        console.log(response)
        setSearchFormValue(response)
    }

    return (
        <div className='wrapper'>
            <div className='search-body flex'>
                <div className='search-body__search-form'>
                    <SearchForm
                      searchFormValue={searchFormValue}
                      changeInput={changeInputValue}>
                    </SearchForm>
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
                          searchFormValue={searchFormValue} 
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
                      favoriteName={favoriteName}
                      favoriteNameActive={favoriteNameActive}>
                    </FavoriteCities>
                </div>
            </div>
        </div>
    )
}

export default App