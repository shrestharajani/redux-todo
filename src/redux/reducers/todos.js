const initialState = {
    todos:[]
}

const todos = (state = initialState,action)=> {
  switch (action.type) {
      case 'ADD_TODO':
        const {id ,content} = action.payload
        return {
            todos:[
                ...state.todos,
                { id, completed:false, content}
            ]
        }

      default:
          return state
  }
}

export default todos



