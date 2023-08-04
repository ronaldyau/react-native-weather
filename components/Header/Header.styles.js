import { StyleSheet } from "react-native";

const BACK_BUTTON_WIDTH = 30;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    width: BACK_BUTTON_WIDTH,
  },
  headerContainer: {
    flex: 1,
    marginRight: BACK_BUTTON_WIDTH,
    alignItems: "center",
  },
  subheader: {
    fontSize: 20,
  },
});
