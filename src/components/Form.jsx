import React, { useState } from 'react'

export default function Form() {
    const [value, setValue] = useState("")

    const changeItems = (event) => {
        setValue(event.target.value)
    }

    return (
        <>
            <div className='form'>
                <input type='text' placeholder='Enter the item' onChange={changeItems} />
            </div>

            <div>{value}</div>
        </>
    )
}
