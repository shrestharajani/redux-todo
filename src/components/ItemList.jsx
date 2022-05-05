import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionFilter } from '../redux/actions/actionFilter'
import Todos from './Todos'
import ReactPaginate from 'react-paginate';
import { setCurrentPage } from '../redux/actions/action';

export default function ItemList() {
    const dispatch = useDispatch()
    const { todos, filter } = useSelector(state => state)
    const filterItem = actionFilter(todos, filter)
    console.log(filterItem, "dsfds")

    // using react only
    // const [pageNumber, setPageNumber] = useState(0)
    // const itemPerPage = 5

    // const itemVisitedInEachPage = pageNumber * itemPerPage
    // const numberOfPage = Math.ceil(filterItem.length / itemPerPage)

    // const handleChange = (e) => {
    //     setPageNumber(e.selected)
    // }

    const itemPerPage = 5

    const itemVisitedInEachPage = itemPerPage
    const numberOfPage = Math.ceil(filterItem.length / itemPerPage)

    const handleChange = (e) => {
        dispatch(setCurrentPage(e.selected))
    }

    const displayItem = filterItem.slice(itemVisitedInEachPage, itemVisitedInEachPage + itemPerPage)
        .map((todo, index) => (
            <Todos
                key={index}
                todo={todo} />
        ))

    return (
        <>
            {filterItem.length ? displayItem :
                <div style={{ textAlign: 'center', paddingTop: '10px' }}> No todos yet!!</div>}

            <ReactPaginate
                pageCount={numberOfPage}
                onPageChange={handleChange}
                containerClassName='pagination-div'
                previousClassName='previous-button'
                nextClassName='next-button'
                disabledClassName='disabled-button'
                breakClassName='break-label'
                activeClassName='active-button'
            />
        </>

    )
}
