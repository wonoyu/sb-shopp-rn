import HomeScreen from "@/features/home/screens/HomeScreen";
import { Tab } from "./route";
import CustomBottomTabBar from "@/components/CustomBottomTabBar";
import { Button, Icon } from "react-native-paper";
import ProfileRoute from "./profileRoute";
import { logout } from "@/features/auth/controllers/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import ProductRoute from "./productRoute";

export default function HomeRoute(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const bottombar = useAppSelector((state) => state.bottombar);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => CustomBottomTabBar(props, bottombar.showBar)}
    >
      <Tab.Screen
        name="Product"
        component={ProductRoute}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Icon source="home" size={size} color={color} />;
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileRoute}
        options={{
          headerShadowVisible: false,
          headerRight: (props) => {
            return (
              <Button icon={"logout"} onPress={() => dispatch(logout())}>
                Logout
              </Button>
            );
          },
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => {
            return <Icon source="account" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
