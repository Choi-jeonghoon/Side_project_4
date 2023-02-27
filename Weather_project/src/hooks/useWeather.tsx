import { useEffect, useState } from 'react';
import { getWeather } from '../apis/weatherApi';
import { Weathers } from '~/types/weatherTypes';

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<Weathers.WeatherData>();

  useEffect(() => {
    (async () => {
      const res = await getWeather('seoul');
      setWeatherData(res);
      console.log('2', res);
    })();
  }, []);
  return { weatherData };
};

export default useWeather;
