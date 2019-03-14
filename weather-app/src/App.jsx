import { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  text-align: center;
`;

const API_KEY = "1db4ac37f40e5ab35e64d81a1c6ffa2f";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
    }
  };

  return (
    <AppContainer>
      <h1>Weather App</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      <WeatherCard weatherData={weatherData} />
    </AppContainer>
  );
};

export default App;
