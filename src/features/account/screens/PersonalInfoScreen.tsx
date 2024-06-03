import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Icon, List, Text } from "react-native-paper";

export default function PersonalInfoScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <Avatar.Image
        size={164}
        style={{
          alignSelf: "center",
        }}
        source={require("../../../../assets/profile_img.jpg")}
      />
      <List.Section>
        <List.Item
          title="Fullname"
          description="Ahmad Ashary Yuwono"
          right={(props) => <List.Icon {...props} icon="account" />}
        />
        <List.Item
          title="LinkedIn"
          description="https://www.linkedin.com/in/ayuwono12/"
          right={(props) => (
            <List.Icon
              {...props}
              icon={require("../../../../assets/linkedin_24px.png")}
            />
          )}
        />
        <List.Item
          title="GitHub"
          description="https://github.com/wonoyu"
          right={(props) => (
            <List.Icon
              {...props}
              icon={require("../../../../assets/github_24px.png")}
            />
          )}
        />
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 16,
  },
});
