import { Alumno } from "../models/alumnos.model.js";

// Controlador para crear un nuevo alumno
export const createAlumno = async (req, res) => {
  try {
    const AlumnoExists = await Alumno.findOne({ where: { dni } });

    if (AlumnoExists) {
      return res
        .status(400)
        .json({ status: 400, message: "El alumno ya existe" });
    }

    const newAlumno = await Alumno.create(req.body);

    if (!newAlumno) {
      throw {
        message: "Error al crear el Alumno",
      };
    }

    // Se retorna la respuesta al cliente
    return res.json({
      alumno: newAlumno,
      message: "Registrado correctamente",
    });
  } catch (error) {
    console.log("error: " + error.message);
    return res.status(500).json({ message: "Error del servidor" });
  }
};

export const ctrlGetAllAlumnos = async () => {
  try {
    const alumnos = await Alumno.findAll();
    return res.status(200).json(alumnos);
  } catch (error) {
    console.log("error: " + error.message);
    return res.status(500).json({ message: "Error del servidor" });
  }
};
