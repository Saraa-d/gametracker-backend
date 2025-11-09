const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  plataforma: {
    type: String,
    required: true
  },
  genero: String,
  portada: String, // URL de la imagen
  estado: {
    type: String,
    enum: ['jugando', 'completado', 'pendiente', 'abandonado'],
    default: 'pendiente'
  },
  puntuacion: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  horasJugadas: {
    type: Number,
    default: 0
  },
  fechaAgregado: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Juego', juegoSchema);