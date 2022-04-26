import React from 'react'
import { useDispatch } from 'react-redux';
import { checkTodo } from '../redux/actions/action';
import { deleteTodo } from '../redux/actions/action';
import { editTodo } from '../redux/actions/action';

export default function Todos({ todo }) {
    const dispatch = useDispatch()

    return (
        <div className='items'>
            <input type="checkbox" onChange={() => { dispatch(checkTodo(todo.id)) }} />
            <div className='item-data'>{todo.completed ?
                <span className='items-item marked'>{todo.content}</span> :
                <span className='items-item'>{todo.content}</span>}</div>

            <div className="edit" onClick={() => { dispatch(editTodo(todo.id)) }}>
                <i className='fa fa-edit' />
            </div>

            <div className="delete" onClick={() => { dispatch(deleteTodo(todo.id)) }}>
                <i className='fa fa-trash' />
            </div>
        </div>
    )
}
