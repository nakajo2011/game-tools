import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  deck: number[],
  hand: number[],
  trash: number[]
}

const getArray = (min: number, max: number) => {
  return Array.from(Array(max - min + 1).keys()).map(i => i+min)
}

export function shuffle<T>(array: T[]) {
  const out = Array.from(array);
  for (let i = out.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    const tmp = out[i];
    out[i] = out[r];
    out[r] = tmp;
  }
  return out;
}

const init = () => {
  let deck = shuffle(getArray(1, 10));
  console.log("deck=", deck);

  let result:State =  {
    deck: deck,
    hand: [],
    trash: [],
  }
  return result;
}
// createSlice() で actions と reducers を一気に生成
const SimpleCardDrawModule = createSlice({
  name: "cardsState",
  initialState: init(),
  reducers: {
    draw (state: State, action: PayloadAction<void>) {
      const deck = state.deck;
      const hand = state.hand;

      if(deck.length > 0) {
        const card: number = deck.pop() || 0;
        hand.push(card);
      }
      state.deck = deck;
      state.hand = hand;
      state.trash = [];
    },
  }
});

export const {
  draw
} = SimpleCardDrawModule.actions

export default SimpleCardDrawModule;