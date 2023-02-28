import { useEffect, useState } from 'react';
import { getWeather } from '../apis/weatherApi';
import { Weathers } from '~/types/weatherTypes';

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<Weathers.WeatherData>();
  const [cityName, setCityName] = useState<string>('seoul'); // cityName 상태 추가
  const [weatherName, setWeatherName] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await getWeather(cityName); // cityName으로 API 호출
      setWeatherData(res);
      console.log('2', res);

      if (res?.weather?.[0]?.main) {
        setWeatherName(res.weather[0].main);
      }
    })();
  }, [cityName]); // cityName을 의존성 배열로 추가

  return { weatherData, setCityName, weatherName }; // setCityName 반환
};

export default useWeather;
