import React from 'react'

export default function Todos({ todo }) {
    return (
        <div className='items'>
            <input type="checkbox" />
            {todo.completed ?
                <span className='items-item marked'>{todo.content}</span> :
                <span className='items-item'>{todo.content}</span>}
        </div>
    )
}
