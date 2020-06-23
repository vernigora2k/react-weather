import React from 'react'
import { useState, useEffect } from 'react'
import SearchForm from './Search/SearchForm'
import LocalTime from './Search/LocalTime'
import Weather from './WeatherNow/Weather'
import FavoriteCityMenu from './WeatherNow/FavoriteCityMenu'
import MainMenu from './Menu/MainMenu'
import FavoriteCityList from './FovoriteCities/FavoriteCityList'
import Context from './context'

function App() {
    const set = new Set()
    const [searchFormValue, setSearchFormValue] = useState('aktobe')
    const [favoriteName, setFavoriteName] = useState(searchFormValue)
    const [favoriteNameActive, setFavoriteNameActive] = useState(false)
    const [citiesList, setCitiesList] = useState(set)
    const [time, setTime] = useState('local time')

    useEffect(() => {
        if (localStorage.getItem('citiesList')) {
            let localStorageCityList = JSON.parse(localStorage.getItem('citiesList'))
            localStorageCityList.forEach(city => {
                set.add(city)
            })
            setCitiesList(set)
        }
    }, [])

    function changeTime(time) {
        setTime(time)
    }

    function changeFavorite() {
        setFavoriteNameActive((data) => !(data))
        setFavoriteName(searchFormValue) 
        addRemoveFavoriteCity() 
    }

    function addRemoveFavoriteCity() { 
        if(!favoriteNameActive) {
            setCitiesList(citiesList.add(searchFormValue.toLowerCase()))
            localStorage.setItem('citiesList', JSON.stringify([...citiesList]))
        } else {
            citiesList.delete(searchFormValue)
            setCitiesList(citiesList)
            localStorage.setItem('citiesList', JSON.stringify([...citiesList]))
        }
    }

    function changeInputValue(response) {
        setSearchFormValue(response)
        checkCityInList(response)
    }
    
    function checkCityInList(inputValue) {
        let isFavoriteCityExist = citiesList.has(inputValue)
        if(isFavoriteCityExist) {
            setFavoriteNameActive(true)
        } else {
            setFavoriteNameActive(false)
        }
    }

    function selectFavoriteCity(city) {
        setSearchFormValue(city)
        setFavoriteName(city)
        checkCityInList(city)
    }

    return (
        <Context.Provider value={{favoriteName, searchFormValue, time, changeTime}}>
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
                            <Weather></Weather>
                            <FavoriteCityMenu
                            searchFormValue={searchFormValue} 
                            favoriteNameActive={favoriteNameActive} 
                            onChange={changeFavorite}>
                            </FavoriteCityMenu>
                        </div>
                        <div className='main-body__menu'>
                            <MainMenu></MainMenu>
                        </div>
                    </div>
                    <div className='main-body__favorite-cities'>
                        <FavoriteCityList 
                        onChangeFavorite={selectFavoriteCity}
                        favoriteNameActive={favoriteNameActive}
                        citiesList={citiesList}>
                        </FavoriteCityList>
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
}

export default App