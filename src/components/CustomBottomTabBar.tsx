import { useAppSelector } from "@/app/hooks";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";
import { BottomNavigation, Drawer } from "react-native-paper";

export default function CustomBottomTabBar(
  props: BottomTabBarProps,
  showBar: boolean
): React.JSX.Element {
  return (
    <BottomNavigation.Bar
      style={{ display: showBar ? "flex" : "none" }}
      navigationState={props.state}
      safeAreaInsets={props.insets}
      onTabPress={({ route, preventDefault }) => {
        const event = props.navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          props.navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: props.state.key,
          });
        }
      }}
      renderIcon={({ route, focused, color }) => {
        const { options } = props.descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({ focused, color, size: 24 });
        }

        return null;
      }}
      getLabelText={({ route }) => {
        const { options } = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel.toString()
            : options.title !== undefined
            ? options.title
            : route.name;

        return label;
      }}
    />
    //   <Drawer.Section>
    //     <Drawer.Item
    //       icon={"home"}
    //       label="Home"
    //       active={props.state.index == 0}
    //       onPress={() => props.navigation.navigate("Home")}
    //     />
    //     <Drawer.Item
    //       icon={"account"}
    //       label="Profile"
    //       active={props.state.index == 1}
    //       onPress={() => props.navigation.navigate("Profile")}
    //     />
    //   </Drawer.Section>
    // </BottomNavigation.Bar>
  );
}
