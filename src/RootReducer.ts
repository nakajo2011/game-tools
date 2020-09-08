import { combineReducers } from '@reduxjs/toolkit';
import SimpleCardDrawModule from './modules/SimpleCardDrawModule';

const RootReducer = combineReducers({
  cardsState: SimpleCardDrawModule.reducer
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;