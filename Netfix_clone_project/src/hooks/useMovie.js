import { useEffect, useState } from "react";
import { getMovie } from "../apis/Service";
import { getCategory } from "../apis/Service";

const useMovie = () => {
  const [movieData, setMovieData] = useState({});
  const [categoryData, setCategory] = useState();

  //영화정보
  useEffect(() => {
    (async () => {
      const res = await getMovie();
      setMovieData(res);
    })();
  }, [setMovieData]);

  //영화 카테고리
  useEffect(() => {
    (async () => {
      const res = await getCategory();
      setCategory(res);
    })();
  }, [setCategory]);

  return { movieData, categoryData };
};

export default useMovie;
