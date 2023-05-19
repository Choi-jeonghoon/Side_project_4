import React from "react";
import { Box } from "@mui/material";
import MainComponent from "../components/MainComponent";
import useMovie from "../hooks/useMovice";

const MainContainer = () => {
  const [movieData, categoryData] = useMovie();
  console.log("qweqwe", movieData);
  console.log("qweqweqwe", categoryData);
  return (
    <Box>
      <MainComponent movieData={movieData} categoryData={categoryData} />
    </Box>
  );
};

export default MainContainer;
