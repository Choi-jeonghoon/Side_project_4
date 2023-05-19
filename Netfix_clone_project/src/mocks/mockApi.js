import { rest } from "msw";
import movie from "../data/movie.json";
import category from "../data/category.json";

export const mockApi = [
  rest.get("/api/movie", (_, response, context) => {
    return response(context.status(200), context.json(movie));
  }),

  rest.get("/api/category", (_, response, context) => {
    return response(context.status(200), context.json(category));
  }),
];
