// Controlador con lógica de negocio para operaciones CRUD de juegos
const Juego = require('../models/Juego');

// Obtener todos los juegos
exports.obtenerJuegos = async (req, res) => {
  try {
    const juegos = await Juego.find().sort({ fechaAgregado: -1 });
    res.status(200).json(juegos);
  } catch (error) {
    console.error('Error en obtenerJuegos:', error);
    res.status(500).json({ 
      mensaje: 'Error al obtener juegos', 
      error: error.message 
    });
  }
};

// Obtener un juego por ID
exports.obtenerJuegoPorId = async (req, res) => {
  try {
    const juego = await Juego.findById(req.params.id);
    if (!juego) {
      return res.status(404).json({ mensaje: 'Juego no encontrado' });
    }
    res.status(200).json(juego);
  } catch (error) {
    console.error('Error en obtenerJuegoPorId:', error);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ mensaje: 'ID de juego inválido' });
    }
    res.status(500).json({ 
      mensaje: 'Error al obtener juego', 
      error: error.message 
    });
  }
};

// Crear un nuevo juego
exports.crearJuego = async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    const juegoGuardado = await nuevoJuego.save();
    res.status(201).json(juegoGuardado);
  } catch (error) {
    console.error('Error en crearJuego:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        mensaje: 'Error de validación', 
        errores: Object.values(error.errors).map(e => e.message)
      });
    }
    res.status(400).json({ 
      mensaje: 'Error al crear juego', 
      error: error.message 
    });
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
    res.status(200).json(juegoActualizado);
  } catch (error) {
    console.error('Error en actualizarJuego:', error);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ mensaje: 'ID de juego inválido' });
    }
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        mensaje: 'Error de validación', 
        errores: Object.values(error.errors).map(e => e.message)
      });
    }
    res.status(400).json({ 
      mensaje: 'Error al actualizar juego', 
      error: error.message 
    });
  }
};

// Eliminar un juego
exports.eliminarJuego = async (req, res) => {
  try {
    const juegoEliminado = await Juego.findByIdAndDelete(req.params.id);
    if (!juegoEliminado) {
      return res.status(404).json({ mensaje: 'Juego no encontrado' });
    }
    res.status(200).json({ 
      mensaje: 'Juego eliminado exitosamente',
      juego: juegoEliminado
    });
  } catch (error) {
    console.error('Error en eliminarJuego:', error);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ mensaje: 'ID de juego inválido' });
    }
    res.status(500).json({ 
      mensaje: 'Error al eliminar juego', 
      error: error.message 
    });
  }
};