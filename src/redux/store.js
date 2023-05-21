import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersReducer } from "./usersSlice";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: "followed",
  storage,
  whitelist: ["followedUsers"],
};

const persistedUserReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
  reducer: { users: persistedUserReducer, filter: filterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
