import customAxios from './index';

const api = {
  url: import.meta.env.VITE_APP_API_URL,
  api_key: import.meta.env.VITE_APP_WEATHER_API_KEY,
};

export const getWeather = async (cityName: string) => {
  const res = await customAxios.get(`${api.url}?q=${cityName}&appid=${api.api_key}`);
  console.log('1', res.data);
  return res.data;
};
