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
import { newSearchValue, newFavoriteName, newLocalTime } from './Redux/actions'

function App({ mainMenuActiveBtn, searchFormValue, favoriteName, searchValueActions, favoriteNameActions }) {

    
    const set = new Set()
    const [favoriteNameActive, setFavoriteNameActive] = useState(false)
    const [citiesList, setCitiesList] = useState(set)
    // const [time, setTime] = useState('local time')

    useEffect(() => {
        if (localStorage.getItem('citiesList')) {
            let localStorageCityList = JSON.parse(localStorage.getItem('citiesList'))
            localStorageCityList.forEach(city => {
                set.add(city)
            })
        }
        if (localStorage.getItem('lastWatchedCity')) {
            searchValueActions(localStorage.getItem('lastWatchedCity'))
        }
    }, [])

    useEffect(() => {
            localStorage.setItem('lastWatchedCity', searchFormValue)
    }, [searchFormValue])

    // function changeTime(time) {
    //     setTime(time)
    // }

    function changeFavorite() {
        setFavoriteNameActive((data) => !(data))
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
        checkCityInList(response)
    }
    
    function checkCityInList(inputValue) {
        const isFavoriteCityExist = citiesList.has(inputValue)
        setFavoriteNameActive(isFavoriteCityExist)
    }

    function selectFavoriteCity(city) {
        searchValueActions(city)
        checkCityInList(city)
        favoriteNameActions(city)
    }

    return (
        //<Context.Provider value={{ time, changeTime}}>
        <Context.Provider value={{ }}>
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
    favoriteName: state.favoriteName,
    time: state.time
})

const mapDispatchToProps = dispatch => {
    return {
        searchValueActions: bindActionCreators(newSearchValue, dispatch),
        favoriteNameActions: bindActionCreators(newFavoriteName, dispatch),
        localTimeActions: bindActionCreators(newLocalTime, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)