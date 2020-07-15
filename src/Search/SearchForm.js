import React, { useState } from 'react'
import './search.scss'
import { connect } from 'react-redux'
import { newSearchValue } from '../Redux/actions'
import { bindActionCreators } from 'redux'

function SearchForm({ searchFormValue, actions, changeInput }) {
    let [formValue, setFormValue] = useState(searchFormValue)

    function handleChange({ target }) {
        setFormValue(target.value)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if (!formValue) {
            return
        }
        actions(formValue.toLowerCase())
        changeInput(formValue.toLowerCase())
    }

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input 
              className='search-form__input' 
              type='text'
              placeholder='example: Aktobe' 
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

const mapStateToProps = state => {
    return state.searchFormValue
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(newSearchValue, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)