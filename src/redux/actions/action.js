let id = 0

export const addTodo = (content)=>{
    return({
        type: 'ADD_TODO',
        payload :{
            id : ++id,
            content
        }
    })
}