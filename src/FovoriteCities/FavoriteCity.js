import React, { useContext } from 'react'
import classNames from 'classnames'
import Context from '../context'

export default function FavoriteCity({ city, changeFavoriteName }) {

    const { favoriteName } = useContext(Context)
    //const [favoriteCityPressed, setFavoriteCityPressed] = useState(false)

    let isFavoriteCityPressed

    if(favoriteName === city) {
        isFavoriteCityPressed = true
    } else {
        isFavoriteCityPressed = false
    }
    
    const favoriteCity = classNames({
        'favorite-city': true,
        'favorite-city_pressed': isFavoriteCityPressed
    })
    
    function showFavoriteCityPressed() {
        changeFavoriteName(city)
        //setFavoriteCityPressed(true)
    }

    return (
        <div 
          className={favoriteCity}
          onClick={() => showFavoriteCityPressed()}>
            <span>{city}</span>
        </div>
    )
}