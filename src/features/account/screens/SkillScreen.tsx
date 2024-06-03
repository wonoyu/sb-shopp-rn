import { ScrollView, StyleSheet, View } from "react-native";
import { List, Text } from "react-native-paper";

export default function SkillScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Item
          title="Programming Language"
          description="Advanced Dart - 70%"
          right={() => (
            <List.Icon icon={require("../../../../assets/dart_24px.png")} />
          )}
        />
        <List.Item
          title="Programming Language"
          description="Intermediate JavaScript - 50%"
          right={() => (
            <List.Icon icon={require("../../../../assets/js_24px.png")} />
          )}
        />
        <List.Item
          title="Programming Language"
          description="Basic Go - 40%"
          right={(props) => (
            <List.Icon icon={require("../../../../assets/go_24px.png")} />
          )}
        />
        <List.Item
          title="Framework"
          description="Advanced Flutter - 70%"
          right={(props) => (
            <List.Icon icon={require("../../../../assets/flutter_24px.png")} />
          )}
        />
        <List.Item
          title="Framework"
          description="Basic Gin - 40%"
          right={(props) => (
            <List.Icon icon={require("../../../../assets/go_24px.png")} />
          )}
        />
        <List.Item
          title="Framework"
          description="Basic ReactJS - 40%"
          right={(props) => (
            <List.Icon icon={require("../../../../assets/react_24px.png")} />
          )}
        />
        <List.Item
          title="Technology"
          description="GIT"
          right={(props) => (
            <List.Icon icon={require("../../../../assets/git_24px.png")} />
          )}
        />
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
