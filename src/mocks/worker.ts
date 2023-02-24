import { setupWorker } from 'msw';
import { mockApiHandler } from './mockApiHandler';

export const worker = setupWorker(...mockApiHandler);
