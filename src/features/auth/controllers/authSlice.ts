import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { extendedApiSlice, userLocalAuth } from "@/features/auth/services/auth";
import * as SecureStore from "expo-secure-store";

export type AuthState = {
    token: string | null,
    username: string | null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, username: null } as AuthState,
    reducers: {
      logout: (state) => {
        state.token = null;
        state.username = null;

        SecureStore.deleteItemAsync('token');
        SecureStore.deleteItemAsync('username');
      }
    },
    extraReducers: (builder) => {
      builder.addCase(
        userLocalAuth.fulfilled,
        (state, action) => {
          state.username = action.payload.username;
          state.token = action.payload.token;
        }
      )
      .addMatcher(
        extendedApiSlice.endpoints.login.matchFulfilled,
        (state, action) => {
          state.username = action.meta.arg.originalArgs.username;
          state.token = action.payload.token;
          SecureStore.setItemAsync('username', action.meta.arg.originalArgs.username);
          SecureStore.setItemAsync('token', action.payload.token);
        },
      )
    },
  });

  export const { logout } = authSlice.actions;
  
  export default authSlice.reducer;