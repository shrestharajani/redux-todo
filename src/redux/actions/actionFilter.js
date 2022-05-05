import { ConstantFilter } from "../../components/ConstantFilter";

export const actionFilter = (store,filters) => {
  switch(filters){
        case ConstantFilter[1].name:
            return store.todos.filter(item => item.completed)
        case ConstantFilter[2].name:
            return store.todos.filter(item => !item.completed)
        default:
            return store.todos
  }
}
