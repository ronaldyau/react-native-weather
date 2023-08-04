import { TouchableOpacity, View } from "react-native";
import { styles } from "./Header.styles.js";
import { StyledText } from "../StyledText/StyledText.jsx";
import { useNavigation } from "@react-navigation/native";

export function Header({ city }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
        <StyledText>{"<"}</StyledText>
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <StyledText>{city.toUpperCase()}</StyledText>
        <StyledText style={styles.subheader}>7 day forecasts</StyledText>
      </View>
    </View>
  );
}
