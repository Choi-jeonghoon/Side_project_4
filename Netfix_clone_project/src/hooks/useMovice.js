import { useEffect, useState } from "react";
import { getMovie } from "../apis/Service";
import { getCategory } from "../apis/Service";

const useMovie = () => {
  const [movieData, setMovieData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  // 영화 정보
  useEffect(() => {
    (async () => {
      const movieRes = await getMovie();
      setMovieData(movieRes);

      const categoryRes = await getCategory();
      setCategoryData(categoryRes);
    })();
  }, []);

  return [movieData, categoryData];
};

export default useMovie;
