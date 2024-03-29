import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './slice'

export default configureStore(
  { reducer: rootReducer },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
