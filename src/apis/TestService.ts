import { A } from '~/types/testData/testType';
import customAxios from './index';

export const getTest = async (): Promise<A.Key> => {
  const res = await customAxios.get(`/api/group`);

  return res.data;
};
