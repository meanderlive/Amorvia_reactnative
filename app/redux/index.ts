import {configureStore} from '@reduxjs/toolkit';
import authReducer from './feature/auth/authSlice';
import cardReducer from './feature/card/cardSlice';
import eventReducer from './feature/event/eventSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer,
    event: eventReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
