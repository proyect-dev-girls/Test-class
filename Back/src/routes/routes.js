import express from "express";
import { alumnoRoutes } from "./alumno.routes.js";

const routes = express();

routes.use(alumnoRoutes);

export { routes };
