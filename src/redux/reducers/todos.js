const initialState = {
    todos:[]
}

const todos = (state = initialState,action)=> {
  switch (action.type) {
      case 'ADD_TODO':{
        const {id ,content} = action.payload
        return {
            todos:[
                ...state.todos,
                { id, completed:false, content}
            ]
        }
      }

      case 'CHECK_TODO':{
        const {id} = action.payload
        const todos = state.todos.map(obj => obj.id === id ? 
         { ...obj,completed : !obj.completed} :
          obj)
        return {todos}
      }  
      
      case 'COMPLETE_TODO':{
        const todos = state.todos.filter(obj => obj.completed === true)
        return {todos}
      }  

      default:
          return state
  }
}

export default todos



