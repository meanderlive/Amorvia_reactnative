import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {destroyLocalStorage, setLocalUser} from '../../../utils/helper';

export interface cardState {
  randomItems: null | any;
}

const initialState: cardState = {
  randomItems: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setRandomCard: (state, action: PayloadAction<any>) => {
      state.randomItems = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setRandomCard} = cardSlice.actions;
export const randomCardSelector = (s: any) => s.card.randomItems;

export default cardSlice.reducer;
