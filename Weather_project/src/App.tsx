import useWeather from './hooks/useWeather';
import './App.css';
import styled from 'styled-components';
import InsertCityNameComponent from './components/InsertCityNameComponent';
import PrintWeatherComponent from './components/PrintWeatherComponent';

const App = () => {
  const { weatherData } = useWeather();
  const [setCityName] = useWeather();
  console.log('app', weatherData);
  return (
    <Container>
      <Box>
        <ProjectTitle>{`WEATHER PROJECT`}</ProjectTitle>
        <PrintWeatherComponent weatherData={weatherData} />
        <InsertCityNameComponent setCityName={setCityName} />
      </Box>
    </Container>
  );
};

export default App;

const Container = styled.div``;
const Box = styled.div``;
const ProjectTitle = styled.h1``;
