import { Image, TouchableOpacity, View } from "react-native";
import { StyledText } from "../StyledText/StyledText";
import { styles } from "./Summary.styles";
import { Clock } from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";

export function Summary({ temperature, interpretation, city, dailyWeather }) {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.clock}>
        <Clock />
      </View>

      <View>
        <StyledText>{city}</StyledText>
      </View>

      <View style={styles.interpretation}>
        <StyledText style={styles.interpretationText}>
          {interpretation.label}
        </StyledText>
      </View>

      <View style={styles.temperatureContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Forecasts", { city, dailyWeather })}
        >
          <StyledText style={styles.temperature}>{temperature}°C</StyledText>
        </TouchableOpacity>
        <Image style={styles.image} source={interpretation.image} />
      </View>
    </>
  );
}
