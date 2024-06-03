import { RegisterRequest } from "@/features/auth/domain/userTypes"
import { useRegisterMutation } from "@/features/auth/services/auth"
import { NavigationContext } from "@react-navigation/native";
import { useContext, useState } from "react";

export const useRegisterController = () => {
    const navigation = useContext(NavigationContext);
    const [userRegister, { isLoading }] = useRegisterMutation();
    const [snackbarMessage, setSnackbarMessage] = useState<string>();

    const register = async (data: RegisterRequest) => {
        try {
            await userRegister(data).unwrap();
            navigation?.goBack();
        } catch (error: any) {
            setSnackbar(`${error.data}`);
        }
    }

    const setSnackbar = (message: string) => {
        setSnackbarMessage(message);
        setTimeout(() => {
            setSnackbarMessage(undefined);
        }, 2500);
    }

    return { register, isLoading, snackbarMessage, setSnackbarMessage };
}