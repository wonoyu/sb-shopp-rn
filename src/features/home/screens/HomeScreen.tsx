import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductList from "../components/ProductList";
import { find } from "../controllers/searchSlice";
import { useAppDispatch } from "@/app/hooks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/shared/routes/route";

type Props = NativeStackScreenProps<RootStackParamList, "ProductList">;

export default function HomeScreen({
  route,
  navigation,
}: Props): React.JSX.Element {
  const dispatch = useAppDispatch();
  const [keyword, setKeyword] = useState<string>("");

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
      <Searchbar
        placeholder="Search product name"
        onChangeText={setKeyword}
        onClearIconPress={() => {
          dispatch(find(""));
          setKeyword("");
        }}
        onBlur={() => dispatch(find(keyword))}
        onSubmitEditing={() => dispatch(find(keyword))}
        blurOnSubmit={true}
        value={keyword}
      />
      <View style={{ margin: 8 }} />
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 24,
    flex: 1,
    flexDirection: "column",
  },
});
