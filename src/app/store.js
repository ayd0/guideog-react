import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { exploreReducer } from '../features/explore/exploreSlice';

export const store = configureStore({
    reducer: {
        explore: exploreReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
  });