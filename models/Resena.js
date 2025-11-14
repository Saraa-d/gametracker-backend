// Modelo de datos para reseñas de videojuegos
const mongoose = require('mongoose');

const resenaSchema = new mongoose.Schema({
  juegoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Juego',
    required: [true, 'El ID del juego es obligatorio']
  },
  titulo: {
    type: String,
    required: [true, 'El título de la reseña es obligatorio'],
    trim: true,
    minlength: [3, 'El título debe tener al menos 3 caracteres'],
    maxlength: [100, 'El título no puede exceder 100 caracteres']
  },
  contenido: {
    type: String,
    required: [true, 'El contenido de la reseña es obligatorio'],
    trim: true,
    minlength: [10, 'El contenido debe tener al menos 10 caracteres'],
    maxlength: [2000, 'El contenido no puede exceder 2000 caracteres']
  },
  puntuacion: {
    type: Number,
    required: [true, 'La puntuación es obligatoria'],
    min: [0, 'La puntuación mínima es 0'],
    max: [5, 'La puntuación máxima es 5']
  },
  fecha: {
    type: Date,
    default: Date.now
  }
}, { 
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('Resena', resenaSchema);