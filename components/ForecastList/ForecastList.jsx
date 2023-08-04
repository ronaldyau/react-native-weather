import { View } from "react-native";
import { DAYS } from "../../utils/datetime-utils";
import { ForecastListItem } from "../ForecastListItem/ForecastListItem";
import { getWeatherInterpretation } from "../../utils/weather-utils";
import { styles } from "./ForecastList.styles";

export function ForecastList({ dailyWeather }) {
  return (
    <View style={styles.container}>
      {dailyWeather.time.map((time, index) => {
        const weatherCode = dailyWeather.weathercode[index];
        const image = getWeatherInterpretation(weatherCode).image;
        const temperature = dailyWeather.temperature_2m_max[index];
        const date = new Date(time);
        const dayOfTheWeek = DAYS[date.getDay()];
        const formatedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={dayOfTheWeek}
            date={formatedDate}
            temperature={temperature.toFixed(0)}
          />
        );
      })}
    </View>
  );
}
