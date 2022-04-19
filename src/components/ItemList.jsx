import React from 'react'
import { useSelector } from 'react-redux'

export default function ItemList() {
    const { todos } = useSelector(state => state)
    console.log("kjsdnfk", todos)

    return (
        <div>No todos yet!!</div>
    )
}
