import React, { useCallback, useState } from "react";
import { Image, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  Snackbar,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { NavigationContext } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginRequest } from "@/features/auth/domain/userTypes";
import { useLoginController } from "@/features/auth/controllers/loginController";
import * as SplashScreen from "expo-splash-screen";
import LoadingDialog from "@/components/LoadingDialog";

export default function LoginScreen(): React.JSX.Element {
  const navigation = React.useContext(NavigationContext);
  const theme = useTheme();
  const { login, isLoading, error, setError } = useLoginController();

  const [showPassword, setShowPassword] = useState(false);

  const [credentials, setCredentials] = useState<LoginRequest>({
    username: "",
    password: "",
  });

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <LoadingDialog
        visible={isLoading}
        title="Logging In..."
        message="Please wait for a moment"
      />
      <View style={styles.spacerQuarter} />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/Logo.png")}
          style={[styles.logo, { backgroundColor: theme.colors.background }]}
        />
      </View>
      <View style={styles.spacerQuarter} />
      <View style={styles.forms}>
        <Text
          style={{
            fontSize: theme.fonts.headlineSmall.fontSize,
            paddingBottom: 8,
          }}
        >
          Login
        </Text>
        <TextInput
          placeholder="Username"
          label="Username"
          value={credentials.username}
          left={<TextInput.Icon icon={"account"} />}
          onChangeText={(text) =>
            setCredentials({
              ...credentials,
              username: text.trim(),
            })
          }
        />
        <View style={{ marginBottom: 16 }} />
        <TextInput
          placeholder="Password"
          label="Password"
          value={credentials.password}
          secureTextEntry={showPassword}
          left={<TextInput.Icon icon={"lock"} />}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          onChangeText={(text) =>
            setCredentials({
              ...credentials,
              password: text.trim(),
            })
          }
        />
      </View>
      <View style={styles.spacer} />
      <View style={styles.buttons}>
        <Button mode="elevated" onPress={() => login(credentials)}>
          Login
        </Button>
        <View style={{ marginBottom: 16 }} />
        <Button
          mode="outlined"
          onPress={() => navigation?.navigate("Register")}
        >
          Register
        </Button>
      </View>
      <Portal>
        {error ? (
          <Snackbar
            visible={Boolean(error)}
            duration={1000}
            onDismiss={() => {}}
            action={{
              label: "CLOSE",
              onPress: () => {
                setError(undefined);
              },
            }}
          >
            {error ? `${error}` : ""}
          </Snackbar>
        ) : (
          ""
        )}
      </Portal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
    flex: 1,
    flexDirection: "column",
  },
  spacerQuarter: {
    flex: 0.25,
  },
  spacerHalf: {
    flex: 0.5,
  },
  spacer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
  },
  forms: {},
  buttons: {},
});
