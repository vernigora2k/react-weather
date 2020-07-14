import React from 'react'
import { useState, useEffect } from 'react'
import SearchForm from './Search/SearchForm'
import LocalTime from './Search/LocalTime'
import Weather from './WeatherNow/Weather'
import FavoriteCityMenu from './WeatherNow/FavoriteCityMenu'
import MainMenu from './Menu/MainMenu'
import FavoriteCityList from './FovoriteCities/FavoriteCityList'
import Context from './context'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newSearchValue } from './Redux/actions'

function App(props) {

    console.log(props.searchFormValue)
    const set = new Set()
    const [favoriteName, setFavoriteName] = useState(props.searchFormValue)
    const [favoriteNameActive, setFavoriteNameActive] = useState(false)
    const [citiesList, setCitiesList] = useState(set)
    const [time, setTime] = useState('local time')

    useEffect(() => {
        if (localStorage.getItem('citiesList')) {
            let localStorageCityList = JSON.parse(localStorage.getItem('citiesList'))
            localStorageCityList.forEach(city => {
                set.add(city)
            })
        }
        if (localStorage.getItem('lastWatchedCity')) {
            const searchValueFromStorage = props.actions(localStorage.getItem('lastWatchedCity'))
        }
    }, [])

    useEffect(() => {
            localStorage.setItem('lastWatchedCity', props.searchFormValue)
    }, [props.searchFormValue])

    function changeTime(time) {
        setTime(time)
    }

    function changeFavorite() {
        setFavoriteNameActive((data) => !(data))
        setFavoriteName(props.searchFormValue) 
        addRemoveFavoriteCity() 
    }

    function addRemoveFavoriteCity() { 
        if(!favoriteNameActive) {
            setCitiesList(citiesList.add(props.searchFormValue.toLowerCase()))
            localStorage.setItem('citiesList', JSON.stringify([...citiesList]))
        } else {
            citiesList.delete(props.searchFormValue)
            setCitiesList(citiesList)
            localStorage.setItem('citiesList', JSON.stringify([...citiesList]))
        }
    }

    function changeInputValue(response) {
        checkCityInList(response)
    }
    
    function checkCityInList(inputValue) {
        const isFavoriteCityExist = citiesList.has(inputValue)
        setFavoriteNameActive(isFavoriteCityExist)
    }

    function selectFavoriteCity(city) {
        const newSearchFormValue = props.actions(city)
        setFavoriteName(city)
        checkCityInList(city)
        console.log(props)
    }

    return (
        <Context.Provider value={{favoriteName, time, changeTime}}>
            <div className='wrapper'>
                <div className='search-body flex'>
                    <div className='search-body__search-form'>
                        <SearchForm
                        changeInput={changeInputValue}>
                        </SearchForm>
                    </div>
                    <div className='search-body__local-time'>
                        <LocalTime/>
                    </div>
                </div>
                <div className='main-body flex'>
                    <div className='main-body__media flex'>
                        <div className='main-body__display flex'>
                            <Weather/>
                            <FavoriteCityMenu
                            // searchFormValue={searchFormValue} можно будет удалить после redux
                            favoriteNameActive={favoriteNameActive} 
                            onChange={changeFavorite}>
                            </FavoriteCityMenu>
                        </div>
                        <div className='main-body__menu'>
                            <MainMenu/>
                        </div>
                    </div>
                    <div className='main-body__favorite-cities'>
                        <FavoriteCityList 
                        onChangeFavorite={selectFavoriteCity}
                        favoriteNameActive={favoriteNameActive}//можно будет попробовать удалить в самом конце. помоему это пропс нигде не использ..
                        citiesList={citiesList}>
                        </FavoriteCityList>
                    </div>
                </div>
            </div>
        </Context.Provider>
    )
}

const mapStateToProps = state => ({
    mainMenuActiveBtn: state.mainMenuActiveBtn,
    searchFormValue: state.searchFormValue.searchFormValue,
    favoriteName: state.favoriteName
})

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(newSearchValue, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)