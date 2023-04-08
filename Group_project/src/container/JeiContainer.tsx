import JeiLComponent from '~/components/jeiLComponent';
import JeiRComponent from '~/components/JeiRComponent';
import { Box } from '@mui/material';

const JeiContatner = () => {
  return (
    <Box
      sx={{
        width: '390px',
        display: 'grid',
        gridTemplateColumns: '0.4fr 1fr',
        margin: '0 auto',
      }}
    >
      <Box sx={{ border: '1px solid red' }}>
        <JeiRComponent />
      </Box>
      <Box sx={{ border: '1px solid blue' }}>
        <JeiLComponent />
      </Box>
    </Box>
  );
};

export default JeiContatner;
