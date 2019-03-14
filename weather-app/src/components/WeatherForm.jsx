import styled from "@emotion/styled";
import { useState } from "react";

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const WeatherForm = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather(city);
      setCity("");
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />

      <Button type="submit">Get Weather</Button>
    </FormContainer>
  );
};

export default WeatherForm;
