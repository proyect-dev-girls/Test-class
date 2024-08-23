import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.listen(3000, async () => {
  console.log("Servidor corrriendo en puerto 3000");
});
