import { Image, View } from "react-native";
import { Product } from "../domain/homeTypes";
import { Button, Icon, Text, useTheme } from "react-native-paper";
import { NavigationContext, useNavigation } from "@react-navigation/native";
import { useContext } from "react";

export default function ProductItem(product: Product): React.JSX.Element {
  const navigation = useContext(NavigationContext);
  const theme = useTheme();

  return (
    <View
      style={{
        marginLeft: 8,
        marginBottom: 16,
        marginRight: 16,
        width: 150,
      }}
    >
      <Image
        source={{ uri: product.image }}
        style={{
          width: 120,
          height: 120,
        }}
      />
      <Text
        numberOfLines={1}
        style={{
          color: theme.colors.primary,
          fontSize: theme.fonts.bodyMedium.fontSize,
          marginBottom: 4,
        }}
      >
        {product.title}
      </Text>
      <Text
        numberOfLines={1}
        style={{
          color: theme.colors.primary,
          fontSize: theme.fonts.bodyLarge.fontSize,
          fontWeight: "bold",
          marginBottom: 4,
        }}
      >{`$${product.price}`}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginRight: 4 }}>
          <Icon source="star" color="#FFC700" size={24} />
        </View>
        <Text
          style={{
            marginRight: 8,
          }}
        >
          {product.rating.rate}
        </Text>
        <Icon source="circle" size={6} />
        <Text
          style={{
            marginLeft: 8,
          }}
          numberOfLines={1}
        >
          {product.rating.count} users
        </Text>
      </View>
      <Button
        mode="contained"
        icon="magnify"
        onPress={() => {
          navigation?.navigate("ProductDetail", product);
        }}
      >
        Lihat Detail
      </Button>
    </View>
  );
}
