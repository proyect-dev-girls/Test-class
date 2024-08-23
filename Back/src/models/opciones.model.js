import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { Pregunta } from "./preguntas.model.js";

export const Opcion = sequelize.define(
  "Opcion",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    texto_opxion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    question_id: {
      type: DataTypes.INTEGER,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    tableName: "opciones",
  }
);

Pregunta.hasMany(Opcion, { foreignKey: "question_id", as: "opciones" });
Opcion.belongsTo(Pregunta, { foreignKey: "id" });
