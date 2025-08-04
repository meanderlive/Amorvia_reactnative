import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type ScheduleType = {
  id: number;
  date: string;
  venue: string;
};
export interface cardState {
  schedule: ScheduleType[];
}

const initialState: cardState = {
  schedule: [
    {
      id: 1,
      date: '07 Jan 2024',
      venue: 'California , US',
    },
  ],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addSchedule: (state, action: PayloadAction<any>) => {
      const data = {
        id: Date.now(),
        date: '07 Jan 2024',
        venue: 'California , US',
      };
      state.schedule = [...state.schedule, data];
    },
    removeSchedule: (state, action: PayloadAction<any>) => {
      const removeId = action.payload.id;
      state.schedule = state.schedule.filter(i => i.id !== removeId);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addSchedule, removeSchedule} = eventSlice.actions;

export default eventSlice.reducer;
