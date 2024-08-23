import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { Alumno } from "alumnos.model.js";
import { Pregunta } from "preguntas.model.js";
import { Opcion } from "opciones.model";

export const Respuesta = sequelize.define(
  "Respuesta",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    alumno_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    option_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    es_correcta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "respuestas",
  }
);

Alumno.hasMany(Respuesta, { foreignKey: "alumno_id" });
Respuesta.belongsTo(Alumno, { foreignKey: "id" });

Pregunta.hasMany(Respuesta, { foreignKey: "question_id" });
Respuesta.belongsTo(Pregunta, { foreignKey: "id" });

Opcion.hasMany(Respuesta, { foreignKey: "option_id" });
Respuesta.belongsTo(Opcion, { foreignKey: "id" });
