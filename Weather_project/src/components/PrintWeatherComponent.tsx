import React from 'react';
import { Weathers } from '../types/weatherTypes';
import styled from 'styled-components';

interface PropsType {
  weatherData: Weathers.WeatherData | undefined;
}

const PrintWeatherComponent = ({ weatherData }: PropsType) => {
  return (
    <Container>
      <WeatherInfo>{weatherData?.name}</WeatherInfo>
      <WeatherInfo>{weatherData?.weather[0].description}</WeatherInfo>
    </Container>
  );
};

export default PrintWeatherComponent;

const Container = styled.div``;
const WeatherInfo = styled.h2``;
