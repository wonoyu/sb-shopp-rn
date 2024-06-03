import { useCallback, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  SectionListData,
  SectionListRenderItem,
  StyleSheet,
  View,
} from "react-native";
import { Icon, List, Text, useTheme } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Product } from "@/features/home/domain/homeTypes";

export default function ProductSheet(product: Product): React.JSX.Element {
  const theme = useTheme();
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["3%", "50%", "70%"], []);

  return (
    <GestureHandlerRootView>
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: theme.colors.background }}
      >
        <BottomSheetView style={styles.container}>
          <List.Section>
            <Text
              style={{
                fontSize: theme.fonts.headlineSmall.fontSize,
                fontWeight: "bold",
                marginBottom: 4,
                color: theme.colors.onBackground,
              }}
            >
              {`$${product.price}`}
            </Text>
            <Text
              style={{
                fontSize: theme.fonts.titleMedium.fontSize,
                fontWeight: "bold",
                color: theme.colors.onBackground,
              }}
            >
              {product.title}
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontSize: theme.fonts.titleMedium.fontSize,
                fontWeight: "bold",
                color: theme.colors.onBackground,
              }}
            >
              Product Description
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontSize: theme.fonts.bodyMedium.fontSize,
                textAlign: "justify",
                color: theme.colors.onBackground,
              }}
            >
              {product.description}
            </Text>
            <Text
              style={{
                marginTop: 4,
                fontSize: theme.fonts.titleMedium.fontSize,
                fontWeight: "bold",
                color: theme.colors.onBackground,
              }}
            >
              Reviews
            </Text>
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
          </List.Section>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
});
