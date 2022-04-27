const initialState = {
    todos:[],
    text:"",
    selected: undefined
}

const todos = (state = initialState,action)=> {
  switch (action.type) {
    case 'ADD_TEXT':{
      const {value} = action.payload
      return {
        todos:[
          ...state.todos,
        ],
        text: value,
        selected:state.selected
      }
    }

      case 'ADD_TODO':{
        const {id ,content} = action.payload
        return {
            todos:[
                ...state.todos,
                { id, completed:false, content}
            ],text:"",
            selected:undefined
        }
      }

      case 'CHECK_TODO':{
        const {id} = action.payload
        const todos = state.todos.map(obj => obj.id === id ? 
         { ...obj,completed : !obj.completed} :
          obj)
        return {
          todos
        }
      }  
      
      case 'COMPLETE_TODO':{
        const todos = state.todos.filter(obj => obj.completed)
        return {
          todos
        }
      }  

      case 'DELETE_TODO':{
        const {id} = action.payload
        const todos = state.todos.filter(obj => obj.id !== id)
        return {
          todos,
          selected:state.selected
        }
      }

      case 'EDIT_TODO':{
        const {id} = action.payload
        const todo_selected = state.todos.find(obj => obj.id === id)
        return {
          todos:[
          ...state.todos,
          ],
          text: todo_selected.content,
          selected: id
        }
      }

      case "EDIT_ADD_TODO":{
        const {id,content} = action.payload
        const todos = state.todos.map(obj => obj.id === id ? {...obj,content} :obj)
        
        return {
          todos,
          text: "",
          selected: undefined,   
        }
      }

      default:
          return state
  }
}

export default todos