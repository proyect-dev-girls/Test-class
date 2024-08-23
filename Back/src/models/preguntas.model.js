import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { Quizz } from "./quizzes.model.js";

export const Pregunta = sequelize.define(
  "Pregunta",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pregunta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quizz_id: {
      type: DataTypes.INTEGER,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    tableName: "preguntas",
  }
);

Quizz.hasMany(Pregunta, { foreignKey: "quizz_id", as: "preguntas" });
Pregunta.belongsTo(Quizz, { foreignKey: "id" });
