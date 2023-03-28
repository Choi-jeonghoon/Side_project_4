import { React, memo } from "react";
import { Box } from "@mui/material";
import MainComponent from "../components/MainComponent";
import useMovieData from "../hooks/useMovie";
import useCategoryData from "../hooks/useMovie";

const MainContainer = memo(() => {
  const { movieData } = useMovieData();
  console.log("컨테이너", movieData);

  const { categoryData } = useCategoryData();
  console.log("컨테이너카테고리", categoryData);
  return (
    <Box>
      <MainComponent />
    </Box>
  );
});

export default MainContainer;
