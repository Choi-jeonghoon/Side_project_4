import { useEffect, useState } from 'react';
import { getTest } from '~/apis/TestService';
import { A } from '~/types/testData/testType';

const useTest = () => {
  const [testData, setTestpData] = useState<A.Key>({});

  useEffect(() => {
    (async () => {
      const res = await getTest();
      console.log('use데이터확인', res);
      setTestpData(res);
    })();
  }, []);

  return { testData };
};

export default useTest;
