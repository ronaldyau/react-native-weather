import { Image, View } from "react-native";
import { StyledText } from "../StyledText/StyledText";
import { styles } from "./ForecastListItem.styles";

export function ForecastListItem({ image, day, date, temperature }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <StyledText style={styles.day}>{day}</StyledText>
      <StyledText style={styles.date}>{date}</StyledText>
      <StyledText style={styles.temperature}>{temperature}°C</StyledText>
    </View>
  );
}
