import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    lifestyle: require('./lifeStyleRedux/Reducers').lifeStylesReducer
})
export default rootReducer
