import { Box, Card, Grid } from '@mui/material';
import { A } from '~/types/testData/testType';

interface TestComponentProps {
  testData: A.Key;
}

const TestComponent = ({ testData }: TestComponentProps) => {
  console.log('Component', testData);
  return (
    <Box>
      <Grid container direction='column' spacing={1.5}>
        {Object.keys(testData).map((key) => {
          const main = testData[key];
          return (
            <Grid item key={main.dam}>
              <Card sx={{ fontSize: 20 }}>
                <div>DAM: {main.dam}</div>
                <div>사업부: {main.deptname}</div>
                {main.group.map((mainSub) => (
                  <div key={mainSub.dam}>
                    사업국: {mainSub.deptname}
                    {mainSub.group.map((mainSubSub) => (
                      <div key={mainSubSub.q01}>지국: {mainSubSub.deptname} </div>
                    ))}
                  </div>
                ))}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TestComponent;
// import { Box, Card, Grid } from '@mui/material';
// import { A } from '~/types/testData/testType';

// interface TestComponentProps {
//   testData: A.Key;
// }

// const TestComponent = ({ testData }: TestComponentProps) => {
//   console.log('Component', testData);
//   return (
//     <Box>
//       <Grid container direction='column' spacing={1.5}>
//         {Object.keys(testData).map((key, index) => {
//           const main = testData[key];
//           return (
//             <Grid item key={`${main.dam}-${index}`}>
//               <Card sx={{ fontSize: 20 }}>
//                 <div>DAM: {main.dam}</div>
//                 <div>사업부: {main.deptname}</div>
//                 {main.group.map((mainSub) => (
//                   <div key={`${mainSub.dam}-${index}`}>
//                     사업국: {mainSub.deptname}
//                     {mainSub.group.map((mainSubSub) => (
//                       <div key={`${mainSubSub.q01}-${index}`}>지국: {mainSubSub.deptname} </div>
//                     ))}
//                   </div>
//                 ))}
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default TestComponent;
