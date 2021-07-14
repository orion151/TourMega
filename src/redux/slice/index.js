import { combineReducers } from 'redux'

import tourListModelSlice from './tourListModelSlice'

const rootReducer = combineReducers({
  tourList: tourListModelSlice
})

export default rootReducer
