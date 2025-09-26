import { configureStore } from '@reduxjs/toolkit';
import authReducer from './feature/auth/authSlice'; // ✅ authSlice mein interestSelector included
import cardReducer from './feature/card/cardSlice';
import eventReducer from './feature/event/eventSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    auth: authReducer,   // auth state + interestSelector included
    card: cardReducer,
    event: eventReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
