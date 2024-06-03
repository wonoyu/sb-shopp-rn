import { LoginRequest } from "@/features/auth/domain/userTypes"
import { useLoginMutation } from "@/features/auth/services/auth"
import { useState } from "react";
import * as SecureStore from "expo-secure-store";

export const useLoginController = () => {
    const [userLogin, { isLoading }] = useLoginMutation();
    const [error, setError] = useState();

    const login = async (credentials: LoginRequest) => {
        try {
            await userLogin(credentials).unwrap();
        } catch (error: any) {
            setError(error.data);
            setTimeout(() => {
                setError(undefined);
            }, 2500);
        }
    }

    return { login, isLoading, error, setError };
}