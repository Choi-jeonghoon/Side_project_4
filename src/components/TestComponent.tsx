import { Box } from '@mui/material';
import { A } from '~/types/testData/testType';

interface testComponetPropsType {
  testData: A.Key;
}
const TestComponent = ({ testData }: testComponetPropsType) => {
  console.log('Component', testData);
  return <Box>Test</Box>;
};

export default TestComponent;
