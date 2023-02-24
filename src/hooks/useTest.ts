import { useEffect, useState } from 'react';
import { getTest } from '~/apis/TestService';
import { A } from '~/types/testData/testType';

const useTest = () => {
  const [testData, setTestData] = useState<A.Key>({});

  useEffect(() => {
    (async () => {
      const res = await getTest();
      setTestData(res);
    })();
  }, []);

  return { testData };
};

export default useTest;
