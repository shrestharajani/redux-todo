import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionFilter } from '../redux/actions/actionFilter'
import Todos from './Todos'
import ReactPaginate from 'react-paginate';
import { setCurrentPage, setPageCount } from '../redux/actions/action';

export default function ItemList() {
    const dispatch = useDispatch()
    const { todos, filter } = useSelector(state => state)
    const filterItem = actionFilter(todos, filter)

    // using react only
    // const [pageNumber, setPageNumber] = useState(0)
    // const itemPerPage = 5

    // const itemVisitedInEachPage = pageNumber * itemPerPage
    // const numberOfPage = Math.ceil(filterItem.length / itemPerPage)

    // const handleChange = (e) => {
    //     setPageNumber(e.selected)
    // }

    const itemPerPage = 5

    useEffect(() => {
        const numberOfPage = Math.ceil(filterItem.length / itemPerPage)
        dispatch(setPageCount(numberOfPage))
    }, [dispatch, filterItem.length, todos.pageNumber])

    const handleChange = (e) => {
        dispatch(setCurrentPage(e.selected * itemPerPage))
    }

    const displayItem = filterItem.slice(todos.pageNumber, todos.pageNumber + itemPerPage)
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
                pageCount={todos.pageCount}
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
