import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    lifestyle: require('./lifeStyleRedux/Reducers').lifeStylesReducer,
    cart: require('./cartRedux/Reducers').cartReducer
})
export default rootReducer
