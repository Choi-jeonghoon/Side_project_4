import customAxios from "./index";

export const getMovie = async () => {
  const MovieRes = await customAxios.get(`/api/movie`);
  return MovieRes.data;
};

export const getCategory = async () => {
  const CategoryRes = await customAxios.get(`/api/category`);
  return CategoryRes.data;
};
