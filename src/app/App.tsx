import { NavigationContainer } from "@react-navigation/native";
import { AppTheme } from "@/shared/constants/themes";
import Router from "@/shared/routes/protectedRoute";

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Router />
    </NavigationContainer>
  );
}
