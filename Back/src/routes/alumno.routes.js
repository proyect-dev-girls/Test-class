import { Router } from "express";
import {
  createAlumno,
  ctrlGetAllAlumnos,
} from "../controllers/alumnos.controllers.js";

const alumnoRoutes = Router();

alumnoRoutes.post("/api/alumno", createAlumno);
alumnoRoutes.get("/api/alumno", ctrlGetAllAlumnos);

export { alumnoRoutes };
