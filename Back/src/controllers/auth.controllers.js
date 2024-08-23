import { Alumno } from "../models/alumnos.model.js";
export const ctrlLoginUser = async (req, res) => {
  const { username, dni } = req.body;

  try {
    // Verificar si el nombre existe
    const user = await Alumno.findOne({ where: { nombres: username } });
    if (!user) {
      return res.status(400).json({
        message: "El alumno no existe",
      });
    }

    // Verificar si el dni coincide
    if (user.dni != dni) {
      return res.status(400).json({
        message: "El DNI no coincide",
      });
    }

    return res.json({ user, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
