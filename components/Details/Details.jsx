import { View } from "react-native";
import { StyledText } from "../StyledText/StyledText.jsx";
import { styles } from "./Details.styles.js";

export function Details({ sunrise, sunset, windspeed }) {
  return (
    <View style={styles.container}>
      <DetailContainer>
        <DetailLabel>{sunrise}</DetailLabel>
        <DetailValue>Sunrise</DetailValue>
      </DetailContainer>
      <DetailContainer>
        <DetailLabel>{sunset}</DetailLabel>
        <DetailValue>Sunset</DetailValue>
      </DetailContainer>
      <DetailContainer>
        <DetailLabel>{windspeed} km/hr</DetailLabel>
        <DetailValue>Windspeed</DetailValue>
      </DetailContainer>
    </View>
  );
}

function DetailContainer({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}

function DetailLabel({ children }) {
  return <StyledText style={{ fontSize: 15 }}>{children}</StyledText>;
}

function DetailValue({ children }) {
  return <StyledText style={{ fontSize: 20 }}>{children}</StyledText>;
}
