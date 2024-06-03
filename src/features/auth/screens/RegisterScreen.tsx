import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  Button,
  Portal,
  Snackbar,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { NavigationContext } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRegisterController } from "../controllers/registerController";
import LoadingDialog from "@/components/LoadingDialog";

export default function RegisterScreen(): React.JSX.Element {
  const navigation = React.useContext(NavigationContext);
  const theme = useTheme();
  const { register, isLoading, snackbarMessage, setSnackbarMessage } =
    useRegisterController();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateForm = () =>
    username && email && password && password == confirmPassword;

  const onFormInvalid = async () => {
    setSnackbarMessage(
      `Either username or email is invalid or password that don't match`
    );

    setTimeout(() => {
      setSnackbarMessage("");
    }, 2500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoadingDialog
        visible={isLoading}
        title="Processing Request..."
        message="Please wait for a moment"
      />
      <View style={styles.spacer} />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/Logo.png")}
          style={[styles.logo, { backgroundColor: theme.colors.background }]}
        />
      </View>
      <View style={styles.spacer} />
      <View style={styles.forms}>
        <Text
          style={{
            fontSize: theme.fonts.headlineSmall.fontSize,
            paddingBottom: 8,
          }}
        >
          Register
        </Text>
        <TextInput
          placeholder="Username"
          label="Username"
          value={username}
          left={<TextInput.Icon icon={"account"} />}
          onChangeText={setUsername}
        />
        <View style={{ marginBottom: 16 }} />
        <TextInput
          placeholder="Email"
          label="Email"
          value={email}
          left={<TextInput.Icon icon={"email"} />}
          onChangeText={setEmail}
        />
        <View style={{ marginBottom: 16 }} />
        <TextInput
          placeholder="Password"
          label="Password"
          value={password}
          secureTextEntry={showPassword}
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          onChangeText={setPassword}
        />
        <View style={{ marginBottom: 16 }} />
        <TextInput
          placeholder="Password"
          label="Confirm Password"
          value={confirmPassword}
          secureTextEntry={showPassword}
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={styles.spacer} />
      <View style={styles.buttons}>
        <Button
          mode="elevated"
          onPress={() => {
            if (validateForm()) {
              register({
                email: email.trim(),
                username: username.trim(),
                password: password.trim(),
              });
            } else {
              onFormInvalid();
            }
          }}
        >
          Register
        </Button>
        <View style={{ marginBottom: 16 }} />
        <Button mode="outlined" onPress={() => navigation?.goBack()}>
          Kembali
        </Button>
      </View>
      <Portal>
        {snackbarMessage ? (
          <Snackbar
            visible={Boolean(snackbarMessage)}
            duration={1000}
            onDismiss={() => {}}
            action={{
              label: "CLOSE",
              onPress: () => {
                setSnackbarMessage(undefined);
              },
            }}
          >
            {snackbarMessage}
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
