import React from 'react'
import './search.scss'

export default function SearchForm({ searchFormValue, changeInput }) {
    let value = '';
    function handleChange(event) {
        console.log(event.target.value)
        value += event.target.value
        handleSubmit(value)
    }
    
    function handleSubmit(value) {
        //console.log(this.input.current.value)
        // event.preventDefault()
        changeInput(value)
        // console.log(event.target.value)
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
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