import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

// Define the initial state based on the presence of the token in localStorage
const token = typeof window !== "undefined" ? localStorage.getItem("blog-token") : null;

interface AuthState {
    isAuthenticated: boolean;
    user: {
        id: string;
        email: string;
    } | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: token ? true : false, // Set isAuthenticated based on token presence
    user: null, // You might want to load user details if available
    token: token, // Store the token from localStorage
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            localStorage.removeItem('blog-token');
        },
        login(state, action) {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user; // Assuming you pass user info on login
            localStorage.setItem('blog-token', action.payload.token);
        }
    }
});

export const { logout, login } = authSlice.actions;

export const selectAuthState = (state: RootState) => state.auth;
export default authSlice.reducer;
