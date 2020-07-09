import React, { useState } from 'react'
import './search.scss'
import { connect } from 'react-redux'

function SearchForm(props, { searchFormValue, changeInput }) {
    let [formValue, setFormValue] = useState(searchFormValue)

    function handleChange(event) {
        setFormValue(event.target.value)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        props.dispatch({ type: 'NEW_SEARCH_VALUE', payload: 'Bollywood'})
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

const mapStateToProps = state => ({
    mainMenuActiveBtn: state.mainMenuActiveBtn
})

export default connect(mapStateToProps)(SearchForm)