import { combineReducers } from '@reduxjs/toolkit';
import SimpleCardDrawModule from './modules/SimpleCardDrawModule';

const RootReducer = combineReducers({
  counter: SimpleCardDrawModule.reducer
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;