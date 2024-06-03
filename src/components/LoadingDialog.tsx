import { View } from "react-native";
import { Dialog, Text, ActivityIndicator, Portal } from "react-native-paper";

export interface LoadingDialogProps {
  visible: boolean;
  title?: string;
  message?: string;
  onDismiss?: () => void;
}

export default function LoadingDialog(props: LoadingDialogProps) {
  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={props.onDismiss}>
        <Dialog.Title>{props.title ?? "Loading..."}</Dialog.Title>
        <Dialog.Content>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ActivityIndicator animating={true} style={{ marginRight: 16 }} />
            <Text variant="bodyMedium">
              {props.message ?? "Please wait for a moment"}
            </Text>
          </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}
