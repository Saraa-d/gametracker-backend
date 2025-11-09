const express = require('express');
const router = express.Router();
const resenaController = require('../controllers/resenaController');

// GET /api/resenas - Obtener todas las reseñas
router.get('/', resenaController.obtenerResenas);

// GET /api/resenas/juego/:juegoId - Obtener reseñas de un juego
router.get('/juego/:juegoId', resenaController.obtenerResenasPorJuego);

// POST /api/resenas - Crear una reseña
router.post('/', resenaController.crearResena);

// PUT /api/resenas/:id - Actualizar una reseña
router.put('/:id', resenaController.actualizarResena);

// DELETE /api/resenas/:id - Eliminar una reseña
router.delete('/:id', resenaController.eliminarResena);

module.exports = router;