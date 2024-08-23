import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// Importaciones
import { startDB } from "./config/database.js";
import { environments } from "./config/environments.js";
import { routes } from "./routes/routes.js";

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
//Route
app.use(routes);

app.listen(environments.PORT, async () => {
  console.log("Servidor corrriendo en puerto: ", environments.PORT);
  startDB();
});
