import { apiSlice } from "@/features/api/apiSlice";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "@/features/auth/domain/userTypes";
import { Endpoints } from "@/shared/constants/endpoints";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import { AuthState } from "../controllers/authSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: Endpoints.login,
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (data) => ({
                url: Endpoints.users,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const userLocalAuth = createAsyncThunk(
    'auth/localAuth',
    async (arg, { rejectWithValue }) => {
        try {
            const token = await SecureStore.getItemAsync("token");
            const username = await SecureStore.getItemAsync("username");

            if (token && username) {
                return { token, username } as AuthState
            }

            return rejectWithValue('User not logged in');
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const { useLoginMutation, useRegisterMutation } = extendedApiSlice;