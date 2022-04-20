import React from 'react'
import { useDispatch } from 'react-redux';
import { checkTodo } from '../redux/actions/action';

export default function Todos({ todo }) {
    const dispatch = useDispatch()

    const checkItem = () => {
        dispatch(checkTodo(todo.id))
    }

    return (
        <div className='items'>
            <input type="checkbox" onChange={checkItem} />
            {todo.completed ?
                <span className='items-item marked'>{todo.content}</span> :
                <span className='items-item'>{todo.content}</span>}
        </div>
    )
}
