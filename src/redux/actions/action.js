let id = 0

export const addTodo = content=>{
    return({
        type: 'ADD_TODO',
        payload :{
            id : ++id,
            content
        }
    })
}

export const checkTodo = id=>{
    return({
        type: 'CHECK_TODO',
        payload :{id }
    })
}

export const defineFilter = filter =>{
    return({
        type: 'DEFINE_FILTER',
        payload: {filter}
    })
}

export const deleteTodo = id =>{
    return({
        type: 'DELETE_TODO',
        payload : {id}
    })
}