const Juego = require('../models/Juego');

// Obtener todos los juegos
exports.obtenerJuegos = async (req, res) => {
  try {
    const juegos = await Juego.find().sort({ fechaAgregado: -1 });
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener juegos', error: error.message });
  }
};

// Obtener un juego por ID
exports.obtenerJuegoPorId = async (req, res) => {
  try {
    const juego = await Juego.findById(req.params.id);
    if (!juego) {
      return res.status(404).json({ mensaje: 'Juego no encontrado' });
    }
    res.json(juego);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener juego', error: error.message });
  }
};

// Crear un nuevo juego
exports.crearJuego = async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    const juegoGuardado = await nuevoJuego.save();
    res.status(201).json(juegoGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear juego', error: error.message });
  }
};

// Actualizar un juego
exports.actualizarJuego = async (req, res) => {
  try {
    const juegoActualizado = await Juego.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!juegoActualizado) {
      return res.status(404).json({ mensaje: 'Juego no encontrado' });
    }
    res.json(juegoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar juego', error: error.message });
  }
};

// Eliminar un juego
exports.eliminarJuego = async (req, res) => {
  try {
    const juegoEliminado = await Juego.findByIdAndDelete(req.params.id);
    if (!juegoEliminado) {
      return res.status(404).json({ mensaje: 'Juego no encontrado' });
    }
    res.json({ mensaje: 'Juego eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar juego', error: error.message });
  }
};