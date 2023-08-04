export class WeatherAPI {
  static async fetchWeather(coordinates) {
    const { latitude, longitude } = coordinates;
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    );
    const weather = response.json();
    return weather;
  }

  static async fetchCity(coordinates) {
    const { latitude, longitude } = coordinates;
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    );
    const {
      address: { city, village, town },
    } = await response.json();
    return city || village || town;
  }

  static async fetchCityCoordinates(city) {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
      );
      const json = await response.json();
      return {
        latitude: json.results[0].latitude,
        longitude: json.results[0].longitude,
      };
    } catch (err) {
      throw "Invalid city name";
    }
  }
}
