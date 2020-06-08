import React from 'react'
import './search.scss'

export default function SearchForm({ searchFormValue, changeInput }) {
    function handleChange(event) {
        changeInput(event.target.value)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input 
              className='search-form__input' 
              type='text'
              placeholder='Aktobe' 
              value={searchFormValue}
              onChange={handleChange}>
            </input>
            <input 
              className='search-form__submit' 
              type='submit' 
              value=''>
            </input>
        </form>
    )
}