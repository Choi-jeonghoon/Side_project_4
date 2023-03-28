import { setupWorker } from "msw";
import { mockApi } from "./mockApi";

export const worker = setupWorker(...mockApi);
