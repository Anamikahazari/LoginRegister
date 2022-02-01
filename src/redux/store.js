import {createStore} from 'redux'
import registerReducer from './registerpage/registerReducer'

const store = createStore(registerReducer)

export default store