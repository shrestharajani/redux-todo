import React from 'react'

export default function Details() {
    return (
        <div className='details'>
            <h4>Filter Todos</h4>
            <button className='all-button'>All</button>
            <button className='complete-button'>Completed</button>
            <button className='non-complete-button'>Non Completed</button>
        </div>
    )
}
