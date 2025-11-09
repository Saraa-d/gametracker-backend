const mongoose = require('mongoose');

const resenaSchema = new mongoose.Schema({
  juegoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Juego',
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  },
  puntuacion: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Resena', resenaSchema);