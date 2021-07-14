import { createSlice } from '@reduxjs/toolkit'

import {
  getTourListAPI
} from '../../apis'

export const initialState = {
  tourList: [],
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

const getTourList = (location) => {
  return async dispatch => {
    dispatch(tourListModelSlice.actions.getTourListStart())
    const result = await getTourListAPI(location)
    if (result.data && result.data.success === true) {
      dispatch(tourListModelSlice.actions.getTourListSuccess({ data: result.data.data }))
    } else {
      dispatch(tourListModelSlice.actions.getTourListFailure())
    }
  }
}

const tourListModelSelector = state => state.tourList

export {
  tourListModelSelector,
  getTourList
}

export default tourListModelSlice.reducer
