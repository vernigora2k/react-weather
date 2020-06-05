import React from 'react'
import './search.scss'

export default function SearchForm() {
    return (
        <form className='search-form'>
            <input 
              className='search-form__input' 
              type='text'
              placeholder='Aktobe' 
              value='Aktobe'>
            </input>
            <input className='search-form__submit' type='submit' value=''></input>
        </form>
    )
}