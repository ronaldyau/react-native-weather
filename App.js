import { useEffect, useState } from "react";
import { Alert, ImageBackground } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "./App.styles";
import { Home } from "./pages/Home/Home";
import { Forecasts } from "./pages/Forecasts/Forecasts";
import background from "./assets/background.png";
import { WeatherAPI } from "./api/weather";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();
const navigationTheme = {
  colors: {
    background: "transparent",
  },
};
export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeather(coordinates);
      fetchCity(coordinates);
    }
  }, [coordinates]);

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } else {
      setCoordinates({
        latitude: "40.754271",
        longitude: "-73.984472",
      });
    }
  }

  async function fetchWeather() {
    const weatherReponse = await WeatherAPI.fetchWeather(coordinates);
    setWeather(weatherReponse);
  }

  async function fetchCity() {
    const cityReponse = await WeatherAPI.fetchCity(coordinates);
    setCity(cityReponse);
  }

  async function fetchCityCoordinates(city) {
    try {
      const coordinatesResponse = await WeatherAPI.fetchCityCoordinates(city);
      setCoordinates(coordinatesResponse);
    } catch (err) {
      Alert.alert("Error ", err);
    }
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <ImageBackground
        imageStyle={styles.image}
        style={styles.background}
        source={background}
      >
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            {isFontLoaded && weather && (
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                  animation: "fade",
                }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home">
                  {() => (
                    <Home
                      city={city}
                      weather={weather}
                      onSubmitSearch={fetchCityCoordinates}
                    />
                  )}
                </Stack.Screen>
                <Stack.Screen name="Forecasts" component={Forecasts} />
              </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
