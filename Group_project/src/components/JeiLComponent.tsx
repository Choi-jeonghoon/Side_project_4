import { Box, TextField, Typography } from '@mui/material';

const jeiLComponent = () => {
  return (
    <Box>
      <Box sx={{ border: '1px solid red' }}>
        <Typography>최정훈</Typography>
      </Box>
      <Box sx={{ border: '1px solid red' }}>
        <Typography>연구원</Typography>
      </Box>
      <Box>
        <TextField>1111</TextField>
      </Box>
      <Box>
        <TextField>02-0000-0000</TextField>
      </Box>
      <Box>
        <TextField>JM IOS 개발중입니다.</TextField>
      </Box>
    </Box>
  );
};

export default jeiLComponent;
