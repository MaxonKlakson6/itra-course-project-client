import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { REHYDRATE, PERSIST } from 'redux-persist/es/constants';

import { authApi } from 'src/api/authApi';
import { authPersistConfig } from 'src/store/persistConfig/authConfig';
import { interactionModeConfig } from 'src/store/persistConfig/interactionModeConfig';
import { collectionApi } from 'src/api/collectionApi';
import { tagsApi } from 'src/api/tagsApi';
import { itemApi } from 'src/api/itemApi';
import { adminApi } from 'src/api/adminApi';
import { userApi } from 'src/api/userApi';
import authReducer, { AuthInitialState } from 'src/store/reducers/authSlice';
import messageReducer from 'src/store/reducers/alertMessagesSlice';
import interactionModeReducer, {
  InteractionModeInitialState,
} from 'src/store/reducers/interactionModeSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [collectionApi.reducerPath]: collectionApi.reducer,
    [itemApi.reducerPath]: itemApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    message: messageReducer,
    auth: persistReducer<AuthInitialState>(authPersistConfig, authReducer),
    interactionMode: persistReducer<InteractionModeInitialState>(
      interactionModeConfig,
      interactionModeReducer
    ),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [REHYDRATE, PERSIST] },
    }).concat(
      authApi.middleware,
      collectionApi.middleware,
      tagsApi.middleware,
      itemApi.middleware,
      adminApi.middleware,
      userApi.middleware
    ),
  devTools: import.meta.env.MODE !== 'production',
});

export const persistor = persistStore(store);
