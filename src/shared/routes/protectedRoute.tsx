import LoginScreen from "@/features/auth/screens/LoginScreen";
import RegisterScreen from "@/features/auth/screens/RegisterScreen";
import { Stack } from "./route";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { userLocalAuth } from "@/features/auth/services/auth";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import HomeRoute from "./homeRoute";

export default function Router(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.token);

  useFocusEffect(
    useCallback(() => {
      dispatch(userLocalAuth()).unwrap();
    }, [])
  );

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          name="HomeRoute"
          component={HomeRoute}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
