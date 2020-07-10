import React, { useState } from 'react'
import './search.scss'
import { connect } from 'react-redux'

function SearchForm({ dispatch, searchFormValue, changeInput }) {
    let [formValue, setFormValue] = useState(searchFormValue)

    function handleChange(event) {
        setFormValue(event.target.value)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target)
        dispatch({ type: 'NEW_SEARCH_VALUE', payload: formValue})
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

const mapStateToProps = state => (
    state.searchFormValue, state.dispatch
)

export default connect(mapStateToProps)(SearchForm)