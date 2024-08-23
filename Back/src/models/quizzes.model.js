import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { Class } from "./class.model.js";

export const Quizz = sequelize.define(
  "Quizz",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class_id: {
      type: DataTypes.INTEGER,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    tableName: "quizzes",
  }
);

Class.hasMany(Quizz, { foreignKey: "class_id", as: "quizzes" });
Quizz.belongsTo(Class, { foreignKey: "id" });
