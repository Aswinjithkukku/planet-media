import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	jwtToken: string;
	isLoggedIn: boolean;
};

const initialState = {
	jwtToken:
		typeof window !== "undefined" && localStorage.getItem("jwt-string")
			? (localStorage.getItem("jwt-string") as string)
			: "",
	isLoggedIn: false,
} as InitialState;

export const users = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		setJwtToken: (state, action) => {
			state.jwtToken = action.payload;
			state.isLoggedIn = true;

			typeof window !== "undefined" &&
				localStorage.setItem("random-string", action.payload);
		},
	},
});

export const { setJwtToken } = users.actions;

export default users.reducer;
