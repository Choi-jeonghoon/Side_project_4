import useWeather from './hooks/useWeather';
import './App.css';
import styled from 'styled-components';
import InsertCityNameComponent from './components/InsertCityNameComponent';
import PrintWeatherComponent from './components/PrintWeatherComponent';
import Clouds from './assets/clear.jpg';
import Clear from './assets/rain.jpg';
import Rain from './assets/rain.jpg';
import Drizzle from './assets/drizzle.jpg';
import Snow from './assets/snow.jpg';
import Thunderstorm from './assets/thunderstorm.jpg';

const weatherImg: {
  [key: string]: string;
} = {
  Clouds: Clouds,
  Clear: Clear,
  Rain: Rain,
  Drizzle: Drizzle,
  Snow: Snow,
  Thunderstorm: Thunderstorm,
};

const App = () => {
  const { weatherData, setCityName, weatherName } = useWeather();
  console.log('app', weatherData);
  return (
    <Container img={weatherImg[weatherName]}>
      <Box>
        <ProjectTitle>{`WEATHER PROJECT`}</ProjectTitle>
        <PrintWeatherComponent weatherData={weatherData} />
        <InsertCityNameComponent setCityName={setCityName} />
      </Box>
    </Container>
  );
};

export default App;

interface ContainerProps {
  img: string | undefined;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  transition: all 0.2s ease-in;
`;

const Box = styled.div`
  text-align: center;
  border: 3px solid white;
  border-radius: 10px;
  padding: 5rem;
  background-color: rgba(255, 255, 255, 0.3);
`;
const ProjectTitle = styled.h1`
  color: white;
  margin: 1rem;
`;
