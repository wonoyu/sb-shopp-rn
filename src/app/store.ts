import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import authReducer from '@/features/auth/controllers/authSlice';
import searchReducer from '@/features/home/controllers/searchSlice';
import bottombarReducer from '@/features/home/controllers/bottomBarSlice';
import { apiSlice } from '@/features/api/apiSlice';

import { listenerMiddleware } from './listenerMiddleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    bottombar: bottombarReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware, apiSlice.middleware),
})

// Infer the type of `store`
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>