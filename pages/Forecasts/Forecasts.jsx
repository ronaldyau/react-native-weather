
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header/Header.jsx";
import { ForecastList } from "../../components/ForecastList/ForecastList.jsx";

export function Forecasts({}) {
    const { params } = useRoute();
    return (
      <>
        <Header city={params.city} />
        <ForecastList dailyWeather={params.dailyWeather} />
      </>
    );
}