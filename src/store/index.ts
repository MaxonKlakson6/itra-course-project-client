import { configureStore, Reducer } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { authApi } from 'src/api/authApi';
import authReducer from 'src/store/reducers/authSlice';
import { authPersistConfig } from 'src/store/persistConfig/authConfig';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer as Reducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export const persistor = persistStore(store);
