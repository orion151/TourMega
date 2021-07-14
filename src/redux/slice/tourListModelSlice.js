import { createSlice } from '@reduxjs/toolkit'

import {
  getTourListAPI
} from '../../apis'

export const initialState = {
  tourList: [],
  location: null,
  loading: false
}

const tourListModelSlice = createSlice({
  name: 'tourListModelSlice',
  initialState,
  reducers: {
    getTourListStart: (state, action) => {
      state.loading = true
    },
    getTourListSuccess: (state, action) => {
      state.loading = false
      if (action.payload.data) {
        state.tourList = action.payload.data
      }
    },
    getTourListFailure: (state, action) => {
      state.loading = false
    }
  }
})

const getTourList = (key) => {
  return async dispatch => {
    dispatch(tourListModelSlice.actions.getTourListStart())
    const result = await getTourListAPI(key)
    if (result.status === 200) {
      dispatch(tourListModelSlice.actions.getTourListSuccess({ data: result.data }))
    } else {
      dispatch(tourListModelSlice.actions.getTourListFailure())
    }
  }
}

const tourListModelSelector = state => state.movieList

export {
  tourListModelSelector,
  getTourList
}

export default tourListModelSlice.reducer
