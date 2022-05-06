const initialState = {
    todos:[],
    text:"",
    selected: undefined,
    pageNumber : 0,
    pageCount:1
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
        selected:state.selected,
        pageNumber:state.pageNumber,
        pageCount:state.pageCount
      }
    }

      case 'ADD_TODO':{
        const {id ,content} = action.payload
        return {
            todos:[
                ...state.todos,
                { id, completed:false, content}
            ],
            text:"",
            selected:undefined,
            pageNumber:state.pageNumber,
            pageCount:state.pageCount  
        }
      }

      case 'CHECK_TODO':{
        const {id} = action.payload
        const todos = state.todos.map(obj => obj.id === id ? 
         { ...obj,completed : !obj.completed} :
          obj)
        return {
          todos,
          text:"",
          selected:undefined,
          pageNumber:state.pageNumber,
          pageCount:state.pageCount  
        }
      }  
      
      case 'COMPLETE_TODO':{
        const todos = state.todos.filter(obj => obj.completed)
        return {
          todos,
          pageNumber:state.pageNumber,
          pageCount:state.pageCount  
        }
      }  

      case 'DELETE_TODO':{
        const {id} = action.payload
        const todos = state.todos.filter(obj => obj.id !== id)
        return {
          todos,
          text: "",
          selected: undefined,
          pageNumber:state.pageNumber,
          pageCount:state.pageCount 
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
          selected: id,
          pageNumber:state.pageNumber,
          pageCount:state.pageCount  
        }
      }

      case "EDIT_ADD_TODO":{
        const {id,content} = action.payload
        const todos = state.todos.map(obj => obj.id === id ? {...obj,content} :obj)
        return {
          todos,
          text: "",
          selected: undefined, 
          pageNumber:state.pageNumber,
          pageCount:state.pageCount   
        }
      }

      case 'SET_PAGE_NUMBER':{
        const {page_num} = action.payload
        return {
          todos:[
            ...state.todos,
            ],
          text:"",
          selected: undefined,
          pageNumber: page_num,
          pageCount: state.pageCount
        }
      }

      case 'SET_PAGE_COUNT':{
        const {num_of_page} = action.payload
        return {
          todos:[
            ...state.todos,
            ],
          text:"",
          selected: undefined,
          pageNumber: state.pageNumber,
          pageCount: num_of_page
        }
      }

      default:
          return state
  }
}

export default todos