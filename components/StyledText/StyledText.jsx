import { Text } from "react-native";
import { styles } from "./StyledText.styles";

export function StyledText({ children, style }) {
  return (
    <Text style={[styles.text, style]} >
      {children}
    </Text>
  );
}
