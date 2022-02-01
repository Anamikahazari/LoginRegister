import {UPDATE_USER} from './registerTypes';

const initialState = {
    userName : ''
}

const registerReducer =(state = initialState, action)=>{
    switch(action.type){
        case UPDATE_USER: return{
            ...state,
            userName: 'Anamika'
        }
        default: return state
    }
}

export default registerReducer