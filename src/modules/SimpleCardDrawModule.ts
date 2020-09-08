import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// createSlice() で actions と reducers を一気に生成
const SimpleCardDrawModule = createSlice({
  name: "counter",
  initialState: 10,
  reducers: {
    increment: (state: number, action: PayloadAction<void>) => state + 1,
    draw: (state: number, action: PayloadAction<void>) => state - 1
  }
});

export const {
  increment, draw
} = SimpleCardDrawModule.actions

export default SimpleCardDrawModule;