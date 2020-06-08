import React from 'react'
import './search.scss'

export default function SearchForm({ searchFormValue, changeInput }) {
    
    
    function handleChange(event) {
        //console.log(this.input.current.value)
        event.preventDefault()
        changeInput('syka')
        console.log(event.target.value)
    }

    return (
        <form className='search-form'>
            <input 
              className='search-form__input' 
              type='text'
              placeholder='Aktobe' 
              value={searchFormValue}
            //   onSubmit={handleSubmit}
            //   onChange={changeInput}
              onChange={handleChange}
            >
            </input>
            <input 
              className='search-form__submit' 
              type='submit' 
              value=''>
            </input>
        </form>
    )
}