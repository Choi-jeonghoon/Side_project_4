import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";

const MainComponent = ({ movieData, categoryData }) => {
  console.log("qweqwe", movieData);
  console.log("qweqweqwe", categoryData);

  const { movies } = movieData;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        "& > *": {
          flex: "1 0 22%",
          margin: "1rem 2",
        },
        gap: "10px",
        pb: "10px",
        pt: "10px",
      }}
    >
      {movies &&
        movies.map(movie => (
          <Card
            key={movie.id}
            sx={{
              border: "1px solid red",
              height: "400px",
              overflow: "hidden",

              backgroundColor: "black",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={movie.movieImg}
              alt={movie.title}
            />
            <CardContent sx={{ color: "white" }}>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 10,
                  WebkitBoxOrient: "vertical",
                  color: "white",
                }}
              >
                줄거리: {movie.coment}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default MainComponent;
