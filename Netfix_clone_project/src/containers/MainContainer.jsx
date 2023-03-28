import { React, memo } from "react";
import { Box } from "@mui/material";
import MainComponent from "../components/MainComponent";
import useMovieData from "../hooks/useMovie";
import useCategoryData from "../hooks/useMovie";

const MainContainer = () => {
  const { movieData } = useMovieData();
  const { categoryData } = useCategoryData();

  return (
    <Box>
      <MainComponent movieData={movieData} categoryData={categoryData} />
    </Box>
  );
};

export default memo(MainContainer);
