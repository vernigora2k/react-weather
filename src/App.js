import React from 'react'
import { useState } from 'react'
import SearchForm from './Search/SearchForm'
import LocalTime from './Search/LocalTime'
import DisplayNow from './WeatherNow/DisplayNow'
import DisplayFavorite from './WeatherNow/DisplayFavorite'
import MainMenu from './Menu/MainMenu'
import FavoriteCityList from './FovoriteCities/FavoriteCityList'

function App() {
    let [searchFormValue, setSearchFormValue] = useState('Aktobe')
    let [favoriteName, setFavoriteName] = useState(searchFormValue)
    let [favoriteNameActive, setFavoriteNameActive] = useState(false)
    let [citiesList, setCitiesList] = useState(['London', 'Isakil'])

    function changeFavorite() {
        setFavoriteNameActive((data) => !(data))
        setFavoriteName(searchFormValue) 
        addRemoveFavoriteCity()
        
    }

    function addRemoveFavoriteCity() {
        let capitalizedSearchValue = searchFormValue.charAt(0).toUpperCase() + searchFormValue.slice(1)
        if(!favoriteNameActive) {
            setCitiesList([...citiesList, capitalizedSearchValue])
        } else {
            setCitiesList(citiesList.filter(city => city !== capitalizedSearchValue))
        }
    }

    function changeInputValue(response) {
        setSearchFormValue(response)
        checkCityInList(response)
    }

    
    function checkCityInList(inputValue) {
        let capitalizeInputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
        let isFavoriteCityExist = citiesList.includes(capitalizeInputValue)
        if(isFavoriteCityExist) {
            setFavoriteNameActive(true)
            console.log('if')
        } else {
            console.log('todo')
            setFavoriteNameActive(false)
        }
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
                          onChange={changeFavorite}>
                        </DisplayFavorite>
                    </div>
                    <div className='main-body__menu'>
                        <MainMenu></MainMenu>
                    </div>
                </div>
                <div className='main-body__favorite-cities'>
                    <FavoriteCityList 
                      favoriteName={favoriteName}
                      favoriteNameActive={favoriteNameActive}
                      citiesList={citiesList}>
                    </FavoriteCityList>
                </div>
            </div>
        </div>
    )
}

export default App