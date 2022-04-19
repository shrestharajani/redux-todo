import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/action'

export default function Form() {
    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const changeItems = (event) => {
        setValue(event.target.value)
    }

    const addItems = (event) => {
        event.preventDefault()
        dispatch(addTodo(value))
        setValue('')
    }

    return (
        <>
            <div className='form'>
                <input
                    type='text'
                    value={value}
                    placeholder='Enter the item'
                    onChange={changeItems} />
                <button
                    disabled={!value}
                    className='add-button'
                    onClick={addItems}>
                    Add Items
                </button>
            </div>
        </>
    )
}
