import { Box, Card, Grid, Typography } from '@mui/material';
import { A } from '~/types/testData/testType';

interface testComponetPropsType {
  testData: A.Key;
}
const TestComponent = ({ testData }: testComponetPropsType) => {
  console.log('Component', testData);
  return (
    <Box>
      <Grid>
        {Object.values(testData).map((main) => (
          <Grid key={main.dam}>
            <Card sx={{ mb: 1.5, fontSize: 20 }}>
              <Typography>DAM: {main.dam}</Typography>
              <Typography>사업부: {main.deptname}</Typography>
              {main.group.map((mainSub) => (
                <Typography key={mainSub.dam}>
                  사업국: {mainSub.deptname}
                  {mainSub.group.map((mainSubSub) => (
                    <Typography key={mainSubSub.dam}>지국: {mainSubSub.deptname} </Typography>
                  ))}
                </Typography>
              ))}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestComponent;
