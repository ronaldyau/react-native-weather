import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  interpretation: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  interpretationText: {
    fontSize: 20,
  },
  image: {
    height: 90,
    width: 90,
  },
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-bewtween"
  },
  temperature: {
    fontSize: 120,
  },
});


