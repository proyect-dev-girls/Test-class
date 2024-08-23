import { Quizz } from "../models/quizzes.model.js";
// Controlador para crear una nueva clase
export const createQuiz = async (req, res) => {
  try {
    const newQuiz = await Quizz.create(req.body);

    if (!newQuiz) {
      throw {
        message: "Error al crear el quiz",
      };
    }

    // Se retorna la respuesta al cliente
    return res.json({
      alumno: newQuiz,
      message: "Creado correctamente",
    });
  } catch (error) {
    console.log("error: " + error.message);
    return res.status(500).json({ message: "Error del servidor" });
  }
};
