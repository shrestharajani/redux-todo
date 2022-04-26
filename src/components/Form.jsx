import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions/action'
import { addText } from '../redux/actions/action'

export default function Form() {
    const { todos } = useSelector(state => state)
    console.log("sjbdsa", todos)
    const dispatch = useDispatch()

    const changeItems = (event) => {
        dispatch(addText(event.target.value))
    }

    const addItems = (event) => {
        event.preventDefault()
        dispatch(addTodo(todos.text))
    }

    return (
        <>
            <div className='form'>
                <input
                    type='text'
                    value={todos.text}
                    placeholder='Enter the item'
                    onChange={changeItems} />
                <button
                    disabled={!todos.text}
                    className='add-button'
                    onClick={addItems}>
                    Add Items
                </button>
            </div>
        </>
    )
}
