import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { REHYDRATE, PERSIST } from 'redux-persist/es/constants';

import { authApi } from 'src/api/authApi';
import { authPersistConfig } from 'src/store/persistConfig/authConfig';
import { collectionApi } from 'src/api/collectionApi';
import authReducer, { AuthInitialState } from 'src/store/reducers/authSlice';
import messageReducer from 'src/store/reducers/alertMessagesSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [collectionApi.reducerPath]: collectionApi.reducer,
    message: messageReducer,
    auth: persistReducer<AuthInitialState>(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [REHYDRATE, PERSIST] },
    }).concat(authApi.middleware, collectionApi.middleware),
});

export const persistor = persistStore(store);
