import { ConstantFilter } from "../../components/ConstantFilter"

const initialState = ConstantFilter[0].name

const filter = (state = initialState,action) =>{
    switch (action.type) {
        case 'DEFINE_FILTER':
            return action.payload.filter 
        default:
            return state
    }
}

export default filter