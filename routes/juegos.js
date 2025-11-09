const express = require('express');
const router = express.Router();
const juegoController = require('../controllers/juegoController');

// GET /api/juegos - Obtener todos los juegos
router.get('/', juegoController.obtenerJuegos);

// GET /api/juegos/:id - Obtener un juego específico
router.get('/:id', juegoController.obtenerJuegoPorId);

// POST /api/juegos - Crear un nuevo juego
router.post('/', juegoController.crearJuego);

// PUT /api/juegos/:id - Actualizar un juego
router.put('/:id', juegoController.actualizarJuego);

// DELETE /api/juegos/:id - Eliminar un juego
router.delete('/:id', juegoController.eliminarJuego);

module.exports = router;