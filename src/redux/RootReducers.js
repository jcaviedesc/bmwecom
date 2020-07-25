import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    lifestyle: require('./lifeStyleRedux/Reducers').lifeStylesReducer,
    cart: require('./cartRedux/Reducers').cartReducer,
    application: require('./appRedux/Reducers').appReducer
})
export default rootReducer
