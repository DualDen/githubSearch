import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {githubReducer} from "./github/slices/github.slice";

const rootReducer = combineReducers({
  [githubApi.reducerPath]: githubApi.reducer,
  githubReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
