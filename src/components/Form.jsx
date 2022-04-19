import React, { useState } from 'react'

export default function Form() {
    const [value, setValue] = useState('')

    const changeItems = (event) => {
        setValue(event.target.value)
    }

    const addItems = () => {
        // setAddedItem(value)
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
