import { Box, CircularProgress } from '@mui/material';

const LodingCommon = () => {
  return (
    <Box
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />;
    </Box>
  );
};

export default LodingCommon;
