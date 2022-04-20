import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { actionFilter } from '../redux/actions/actionFilter'
import Todos from './Todos'

export default function ItemList() {
    const { todos, filter } = useSelector(state => state)
    const filterItem = actionFilter(todos, filter)

    useEffect(() => {
        localStorage.setItem("Items", JSON.stringify(filterItem))
    }, [filterItem])
    const item = localStorage.getItem('Items');

    return (
        <div>
            {filterItem.length ? filterItem.map((todo, index) => (
                <Todos
                    key={index}
                    todo={todo} />
            )) : <div style={{ textAlign: 'center', paddingTop: '10px' }}> No todos yet!!</div>}

        </div>
    )
}
