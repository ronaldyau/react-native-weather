import { Text, View } from "react-native"
import { styles } from "./Home.styles";
import { Summary } from "../../components/Summary/Summary";
import { getWeatherInterpretation } from "../../utils/weather-utils";
import { Details } from "../../components/Details/Details";
import { getTimeFromDateTime } from "../../utils/datetime-utils";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function Home({ weather, city, onSubmitSearch }) {
    const currentWeather = weather.current_weather;
    const temperature = Math.round(currentWeather.temperature);
    const interpretation = getWeatherInterpretation(currentWeather.weathercode);
    const sunrise = getTimeFromDateTime(weather.daily.sunrise[0]);
    const sunset = getTimeFromDateTime(weather.daily.sunset[0]);
    const windspeed = currentWeather.windspeed;
    const dailyWeather = weather.daily;
    return (
      <>
        <View style={styles.summary}>
          <Summary
            city={city}
            temperature={temperature}
            interpretation={interpretation}
            dailyWeather={dailyWeather}
          />
        </View>
        <View style={styles.search}>
          <SearchBar onSubmit={onSubmitSearch} />
        </View>
        <View style={styles.details}>
          <Details sunrise={sunrise} sunset={sunset} windspeed={windspeed} />
        </View>
      </>
    );
}