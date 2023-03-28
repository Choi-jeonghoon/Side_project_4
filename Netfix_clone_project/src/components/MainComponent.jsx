import { Box } from "@mui/system";
import React, { memo } from "react";

const items = [
  {
    title: "제목",
    key: "id",
  },
  {
    Contents: "내용",
    key: "contents",
  },
];

const MainComponent = memo(() => {
  return (
    <Box
      sx={{
        width: "220px",
        height: "250px",
        color: "white",
        border: "1px solid white",
      }}
    >
      {items.map(items => (
        <Box key={items.key}>
          {items.title}
          <Box> {items.Contents}</Box>
        </Box>
      ))}
    </Box>
  );
});

export default MainComponent;
