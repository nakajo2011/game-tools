import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './RootReducer'

const store = configureStore({
  reducer: RootReducer
})

export type AppDispatch = typeof store.dispatch
export default store