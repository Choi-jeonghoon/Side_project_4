import TestComponent from '~/components/TestComponent';
import { Box } from '@mui/material';
import useTest from '~/hooks/useTest';

const TestContainer = () => {
  const { testData } = useTest();
  console.log('container', testData);

  return (
    <Box>
      <TestComponent testData={testData} />
    </Box>
  );
};

export default TestContainer;
