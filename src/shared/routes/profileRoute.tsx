import PersonalInfoScreen from "@/features/account/screens/PersonalInfoScreen";
import { TopTab } from "./route";
import SkillScreen from "@/features/account/screens/SkillScreen";
import { useTheme } from "react-native-paper";

export default function ProfileRoute(): React.JSX.Element {
  const theme = useTheme();

  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Personal Info" component={PersonalInfoScreen} />
      <TopTab.Screen name="Skill" component={SkillScreen} />
    </TopTab.Navigator>
  );
}
