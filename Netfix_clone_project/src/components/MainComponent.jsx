import { Box } from "@mui/system";
import { React, memo } from "react";

const MainComponent = memo(({ movieData, categoryData }) => {
  console.log("456", movieData);
  console.log("123", categoryData);

  const items = [
    {
      title: "제목",
      key: `${movieData?.title}`,
    },
    {
      title: "",
      key: `${movieData?.movieImg}`,
    },
    {
      title: "카테고리",
      key: `${categoryData?.category}`,
    },
    {
      title: "줄거리",
      key: `${movieData?.coment}`,
    },
  ];

  return (
    <Box
      sx={{
        width: "220px",
        height: "250px",
        color: "white",
        border: "1px solid white",
      }}
    >
      {items.map(obj => (
        <Box key={obj.id}>
          {obj.title}
          <Box>{obj.key}</Box>
        </Box>
      ))}
    </Box>
  );
});

export default MainComponent;
