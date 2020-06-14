import React, { useState } from 'react'
import './search.scss'

export default function SearchForm({ searchFormValue, changeInput }) {
    let [formValue, setFormValue] = useState(searchFormValue)

    function handleChange(event) {
        setFormValue(event.target.value)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if (!formValue) {
            return
        }
        changeInput(formValue.toLowerCase())
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input 
              className='search-form__input' 
              type='text'
              placeholder='Aktobe' 
              value={formValue}
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