import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { REHYDRATE, PERSIST } from 'redux-persist/es/constants';

import { authApi } from 'src/api/authApi';
import authReducer, { AuthInitialState } from 'src/store/reducers/authSlice';
import { authPersistConfig } from 'src/store/persistConfig/authConfig';
import { collectionApi } from 'src/api/collectionApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [collectionApi.reducerPath]: collectionApi.reducer,
    auth: persistReducer<AuthInitialState>(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [REHYDRATE, PERSIST] },
    }).concat(authApi.middleware, collectionApi.middleware),
});

export const persistor = persistStore(store);
