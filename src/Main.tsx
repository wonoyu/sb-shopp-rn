import * as React from "react";
import { registerRootComponent } from "expo";
import { PaperProvider } from "react-native-paper";
import App from "./app/App";
import { AppTheme } from "./shared/constants/themes";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { store } from "@/app/store";

export default function Main(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider theme={AppTheme}>
        <App />
      </PaperProvider>
    </Provider>
  );
}

SplashScreen.preventAutoHideAsync();

registerRootComponent(Main);
