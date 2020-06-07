import React from 'react'
import './favorite-cities.scss'

// export default function FavoriteCities({ favoriteActive }) {
//     console.log(favoriteActive)
//     const myRef = React.createRef()
//     console.log(myRef)
//     console.log(myRef.current)

//     return (
//         <div className='favorite-cities'>
//             <div className='favorite-cities__title'>
//                 <span>Added Locations:</span>
//             </div>
//             <div className='favorite-cities__list flex'>
//                 <div className='favorite-city' ref={myRef}><span>London</span></div>
//             </div>
//         </div>
//     )
// }


export default class FavoriteCities extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }

    render() {
        return (
            <div className='favorite-cities'>
                <div className='favorite-cities__title'>
                    <span>Added Locations:</span>
                </div>
                <div className='favorite-cities__list flex'>
                    <div className='favorite-city' ref={this.myRef}><span>London</span></div>
                </div>
            </div>
        )
    }
}