import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Product } from "@/features/home/domain/homeTypes";

export type RootStackParamList = {
  HomeRoute: undefined;
  Login: undefined;
  Register: undefined;
  ProductList: undefined;
  ProductDetail: Product;
};

export const Tab = createBottomTabNavigator();
export const TopTab = createMaterialTopTabNavigator();
export const Stack = createNativeStackNavigator<RootStackParamList>();
