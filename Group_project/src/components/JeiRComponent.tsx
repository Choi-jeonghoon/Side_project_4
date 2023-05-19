import { Box, Typography } from '@mui/material';

const JeiRComponent = () => {
  return (
    <Box>
      <Box>
        <Box sx={{ border: '1px solid Black' }}>
          <Typography>이름</Typography>
        </Box>
        <Box sx={{ border: '1px solid Black' }}>
          <Typography>직위</Typography>
        </Box>
        <Box sx={{ border: '1px solid Black' }}>
          <Typography>내선</Typography>
        </Box>
        <Box sx={{ border: '1px solid Black' }}>
          <Typography>전화번호</Typography>
        </Box>
        <Box sx={{ border: '1px solid Black' }}>
          <Typography>담당업무</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JeiRComponent;
