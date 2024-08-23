import { Router } from "express";
import { ctrlLoginUser } from "../controllers/auth.controllers.js";

const authRoutes = Router();

authRoutes.post("/login", ctrlLoginUser);

export { authRoutes };
