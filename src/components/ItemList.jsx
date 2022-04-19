import React from 'react'
import { useSelector } from 'react-redux'
import Todos from './Todos'

export default function ItemList() {
    const { todos } = useSelector(state => state)
    console.log("dkhkd", todos)
    return (
        <div>
            {todos.todos.length ? todos.todos.map((todo, index) => (
                <Todos
                    key={index}
                    todo={todo} />
            )) : <div> No todos yet!!</div>}

        </div>
    )
}
