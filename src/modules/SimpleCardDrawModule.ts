import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {red} from '@material-ui/core/colors';
import { DEFAULT_CARD_COLOR_WHITE } from "../constants";

type State = {
  deck: number[],
  hand: number[],
  trash: number[],
  color: string,
}

export type DeckSettingsState = {
  min: number,
  max: number,
  deckSet: number,
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

const init = (min: number, max: number, deckSet: number) => {
  const cards = getArray(min, max);

  let multiples: number[] = [];
  for(let i=0; i<deckSet; i++) {
    multiples = multiples.concat(cards);
  }
  let deck = shuffle(multiples);

  return {
    deck: deck,
    hand: [],
    trash: [],
    color: '',
  }
};

const initialState = (() => {
  const state =  init(1, 10, 1);
  state.color = DEFAULT_CARD_COLOR_WHITE;
  return state;
})();

// createSlice() で actions と reducers を一気に生成
const SimpleCardDrawModule = createSlice({
  name: "cardsState",
  initialState: initialState,
  reducers: {
    generate (state: State, action: PayloadAction<DeckSettingsState>) {
      const p = action.payload;
      const generated = init(p.min, p.max, p.deckSet);
      state.deck = generated.deck;
      state.hand = generated.hand;
      state.trash = generated.trash;
    },
    draw (state: State, action: PayloadAction<void>) {
      const deck = state.deck;
      const hand = state.hand;

      if(deck.length > 0) {
        const card: number = deck.pop() || 0;
        hand.push(card);
      }

      state.deck = deck;
      state.hand = hand;
    },
    trash (state: State, action: PayloadAction<number>) {
      const trashCard = action.payload;
      state.hand = state.hand.filter(c => c !== trashCard);
      state.trash.push(trashCard);
    },
    revert (state: State, action: PayloadAction<number>) {
      const revertCard = action.payload;
      state.trash = state.trash.filter(c => c !== revertCard);
      state.hand.push(revertCard);
    },
    setColor(state: State, action: PayloadAction<string>) {
      const newColor = action.payload;
      state.color = newColor;
    }
  }
});

export const {
  generate, draw, trash, revert,
} = SimpleCardDrawModule.actions

export default SimpleCardDrawModule;