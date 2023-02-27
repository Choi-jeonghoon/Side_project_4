import useWeather from './hooks/useWeather';
import './App.css';

const App = () => {
  const { weatherData } = useWeather();
  console.log('app', weatherData);
  return <div className='App'></div>;
};

export default App;
