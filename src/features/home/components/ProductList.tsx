import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useMemo } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { useGetProductsQuery } from "../services/home";
import ProductItem from "./ProductItem";

export default function ProductList(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const {
    data: products = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetProductsQuery();

  const search = useAppSelector((state) => state.search);

  const filteredProducts = useMemo(() => {
    const filteredProducts = products.slice();

    return filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(search.keyword.toLowerCase())
    );
  }, [products, search.keyword]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <Text>{error ? error.toString() : ""}</Text>
      </View>
    );
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={filteredProducts}
      renderItem={({ item, index }) => {
        return (
          <View>
            <ProductItem {...item} />
          </View>
        );
      }}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={refetch} />
      }
    />
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
