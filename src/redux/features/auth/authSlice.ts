import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { RootState } from "@/redux/store";

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

const initialState: AuthState={
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null,
}


export const login= createAsyncThunk(
    'auth/login',
    async (Credentials:{email: string; password:string},{rejectWithValue})=>{
        try{
            const response=await axios.post('/api/auth/login',Credentials);
            return response.data;
        }catch(error:any){
            return rejectWithValue(error.response.data);
        }
    }
)

const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout(state){
            state.isAuthenticated=false;
            state.user=null;
            state.token=null;
        }
    }
});

export const {logout}=authSlice.actions;

export const selectAuthState=(state: RootState)=> state.auth;
export default authSlice.reducer;