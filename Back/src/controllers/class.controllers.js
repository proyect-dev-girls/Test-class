import { Class } from "../models/class.model.js";
// Controlador para crear una nueva clase
export const createClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);

    if (!newClass) {
      throw {
        message: "Error al crear la clase",
      };
    }

    // Se retorna la respuesta al cliente
    return res.json({
      alumno: newClass,
      message: "Creado correctamente",
    });
  } catch (error) {
    console.log("error: " + error.message);
    return res.status(500).json({ message: "Error del servidor" });
  }
};

export const ctrlGetAllClass = async () => {
  try {
    const classes = await Class.findAll();
    return res.status(200).json(classes);
  } catch (error) {
    console.log("error: " + error.message);
    return res.status(500).json({ message: "Error del servidor" });
  }
};
