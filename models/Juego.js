const mongoose = require('mongoose');

// Modelo de datos para videojuegos en la biblioteca personal
const juegoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true,
    minlength: [1, 'El título debe tener al menos 1 caracter'],
    maxlength: [200, 'El título no puede exceder 200 caracteres']
  },
  plataforma: {
    type: String,
    required: [true, 'La plataforma es obligatoria'],
    trim: true
  },
  genero: {
    type: String,
    trim: true
  },
  portada: {
    type: String,
    trim: true
  },
  estado: {
    type: String,
    enum: {
      values: ['jugando', 'completado', 'pendiente', 'abandonado'],
      message: '{VALUE} no es un estado válido'
    },
    default: 'pendiente'
  },
  puntuacion: {
    type: Number,
    min: [0, 'La puntuación mínima es 0'],
    max: [5, 'La puntuación máxima es 5'],
    default: 0
  },
  horasJugadas: {
    type: Number,
    min: [0, 'Las horas no pueden ser negativas'],
    default: 0
  },
  fechaAgregado: {
    type: Date,
    default: Date.now
  }
}, { 
  timestamps: true,
  versionKey: false 
});

module.exports = mongoose.model('Juego', juegoSchema);