import { rest } from 'msw';
import test from '../dev/test.json';

export const mockApiHandler = [
  rest.get('/api/test', (_, response, context) => {
    return response(context.status(200), context.json(test));
  }),
];
