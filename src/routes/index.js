import { tickets } from "./tickets.js";
import { parseRoute } from "../utils/parseRoute.js";

export const routes = [...tickets].map((route) => ({
  ...route,
  path: parseRoute(route.path),
}));
