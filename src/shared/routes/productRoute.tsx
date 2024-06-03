import React from "react";
import { Stack } from "./route";
import HomeScreen from "@/features/home/screens/HomeScreen";
import ProductDetailScreen from "@/features/home/screens/ProductDetailScreen";

export default function ProductRoute(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
