import styled from "@emotion/styled";

const CardContainer = styled.div`
  border: 1px solid #007bff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background: #f8f9fa;
  color: #000;
`;

const Temperature = styled.h2`
  margin: 0;
`;

const Condition = styled.p`
  font-size: 1.2rem;
  margin: 5px 0;
`;

const WeatherCard = ({ weatherData }) => {
  return (
    <CardContainer>
      {weatherData ? (
        <>
          <Temperature>{Math.round(weatherData.main.temp)}°C</Temperature>

          <Condition>{weatherData.weather[0].description}</Condition>
          <p>{weatherData.name}</p>
        </>
      ) : (
        <p>No weather data available</p>
      )}
    </CardContainer>
  );
};

export default WeatherCard;
