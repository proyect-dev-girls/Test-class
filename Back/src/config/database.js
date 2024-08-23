import { Sequelize } from "sequelize";
import mysql from "mysql2/promise";
import { environments } from "./environments.js";

// Crear base de datos si no existe
async function createDatabaseIfNotExists() {
  const connection = await mysql.createConnection({
    host: environments.DB.DB_HOST,
    user: environments.DB.DB_USER,
    password: environments.DB.DB_PASSWORD,
    port: environments.DB.DB_PORT,
  });

  await connection.query(
    `CREATE DATABASE IF NOT EXISTS ${environments.DB.DB_NAME};`
  );
  await connection.end();
}

// Se llama a la funcion para crear la BD antes de que inicie en sequelize
await createDatabaseIfNotExists();

export const sequelize = new Sequelize(
  environments.DB.DB_NAME,
  environments.DB.DB_USER,
  environments.DB.DB_PASSWORD,
  {
    host: environments.DB.DB_HOST,
    dialect: environments.DB.DB_DIALECT,
    port: environments.DB.DB_PORT,
  }
);

export async function startDB() {
  try {
    await sequelize.sync({ force: false });
    console.log("Starting database...");
  } catch (error) {
    console.log(error);
  }
}
