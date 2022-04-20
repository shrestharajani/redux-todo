import React from 'react'
import { useDispatch } from 'react-redux'
import { defineFilter } from '../redux/actions/action'
import { ConstantFilter } from './ConstantFilter'

export default function Details() {
    const dispatch = useDispatch()

    return (
        <div className='details'>
            <h4>Filter Todos</h4>
            {ConstantFilter.map((item, index) => (
                <button key={index}
                    className={`${item.class}`}
                    onClick={() => { dispatch(defineFilter(item.name)) }
                    }>{item.name}</button>
            ))}
            {/* {Object.keys(ConstantFilter).map((item, index) => {
                const currentFilter = ConstantFilter[item];
                return (
                    <button key={index}>{currentFilter}</button>
                )
            })} */}
        </div>
    )
}
