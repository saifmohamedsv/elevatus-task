import { type Action, type ThunkAction, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import jobsApi from "../features/jobs/jobsSlice";
import searchSlice from "./search/searchSlice";
import { useDispatch, useSelector, useStore } from 'react-redux';
import jobApi from "./jobs/jobSlice";

export const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer, // Add the new reducer
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware, jobApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = AppStore['dispatch'];

// This file serves as a central hub for re-exporting pre-typed Redux hooks.
export type AppStore = typeof store;
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;

// Use throughout your app instead of plain useDispatch and useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
