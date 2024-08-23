import express from "express";
import { alumnoRoutes } from "./alumno.routes.js";
import { authRoutes } from "./auth.routes.js";

const routes = express();

routes.use(alumnoRoutes);
routes.use(authRoutes);

export { routes };
