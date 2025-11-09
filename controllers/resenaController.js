const Resena = require('../models/Resena');

// Obtener todas las reseñas
exports.obtenerResenas = async (req, res) => {
  try {
    const resenas = await Resena.find().populate('juegoId').sort({ fecha: -1 });
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener reseñas', error: error.message });
  }
};

// Obtener reseñas por juego
exports.obtenerResenasPorJuego = async (req, res) => {
  try {
    const resenas = await Resena.find({ juegoId: req.params.juegoId }).sort({ fecha: -1 });
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener reseñas', error: error.message });
  }
};

// Crear una reseña
exports.crearResena = async (req, res) => {
  try {
    const nuevaResena = new Resena(req.body);
    const resenaGuardada = await nuevaResena.save();
    res.status(201).json(resenaGuardada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear reseña', error: error.message });
  }
};

// Actualizar una reseña
exports.actualizarResena = async (req, res) => {
  try {
    const resenaActualizada = await Resena.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!resenaActualizada) {
      return res.status(404).json({ mensaje: 'Reseña no encontrada' });
    }
    res.json(resenaActualizada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar reseña', error: error.message });
  }
};

// Eliminar una reseña
exports.eliminarResena = async (req, res) => {
  try {
    const resenaEliminada = await Resena.findByIdAndDelete(req.params.id);
    if (!resenaEliminada) {
      return res.status(404).json({ mensaje: 'Reseña no encontrada' });
    }
    res.json({ mensaje: 'Reseña eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar reseña', error: error.message });
  }
};