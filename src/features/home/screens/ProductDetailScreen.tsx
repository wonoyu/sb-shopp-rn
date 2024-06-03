import { useAppDispatch } from "@/app/hooks";
import { RootStackParamList } from "@/shared/routes/route";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { hide, show } from "../controllers/bottomBarSlice";
import { ProductId } from "../domain/homeTypes";
import { useGetProductQuery } from "../services/home";
import ProductSheet from "@/features/home/components/ProductSheet";
import { IconButton } from "react-native-paper";

type Props = NativeStackScreenProps<RootStackParamList, "ProductDetail">;

export default function ProductDetailScreen({
  route,
  navigation,
}: Props): React.JSX.Element {
  const params = route.params;
  const dispatch = useAppDispatch();

  const {
    data: product,
    isSuccess,
    isError,
    error,
  } = useGetProductQuery(`${params.id}` as ProductId);

  useEffect(() => {
    dispatch(hide());

    return () => {
      dispatch(show());
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: isSuccess ? product.image : params.image,
        }}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View>
          <IconButton
            containerColor="#00000077"
            iconColor="white"
            icon="arrow-left"
            onPress={() => navigation.goBack()}
          />
        </View>
        {ProductSheet(isSuccess ? product : params)}
      </ImageBackground>
    </SafeAreaView>
  );
}
