import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

function FavoriteCity({ city, changeFavoriteName, favoriteName }) {

    const isFavoriteCityPressed = favoriteName === city

    const favoriteCity = classNames({
        'favorite-city': true,
        'favorite-city_pressed': isFavoriteCityPressed
    })
    
    function showFavoriteCityPressed() {
        changeFavoriteName(city)
    }

    return (
        <div 
          className={favoriteCity}
          onClick={showFavoriteCityPressed}>
            <span>{city}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return state.favoriteName
}

export default connect(mapStateToProps)(FavoriteCity)