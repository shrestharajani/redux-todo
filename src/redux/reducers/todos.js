const initialState = {
    todos:[],
    text:"",
}

const todos = (state = initialState,action)=> {
  switch (action.type) {
    case 'ADD_TEXT':{
      const {value} = action.payload
      return {
        todos:[
          ...state.todos,
        ],
        text: value
      }
    }

      case 'ADD_TODO':{
        const {id ,content} = action.payload
        return {
            todos:[
                ...state.todos,
                { id, completed:false, content}
            ],text:""
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
        const todos = state.todos.filter(obj => obj.completed)
        return {todos}
      }  

      case 'DELETE_TODO':{
        const {id} = action.payload
        const todos = state.todos.filter(obj => obj.id !== id)
        return {todos}
      }

      case 'EDIT_TODO':{
        const {id} = action.payload
        const todo_selected = state.todos.find(obj => obj.id === id)
        return {
          todos:[
          ...state.todos,
          ],
          text: todo_selected.content
        }
      }

      default:
          return state
  }
}

export default todos