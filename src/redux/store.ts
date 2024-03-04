import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/userSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
