// Configuración principal del servidor Express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configuración de CORS más específica
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://saraa-d.github.io'] 
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middlewares para procesar peticiones
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a MongoDB con opciones mejoradas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
    console.log(`Base de datos: ${mongoose.connection.name}`);
  })
  .catch((err) => {
    console.error('Error conectando a MongoDB:', err.message);
    process.exit(1);
  });

// Manejar errores de conexión después de la conexión inicial
mongoose.connection.on('error', (err) => {
  console.error('Error de MongoDB:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB desconectado');
});

// Importar rutas
const juegosRoutes = require('./routes/juegos');
const resenasRoutes = require('./routes/resenas');

// Usar rutas
app.use('/api/juegos', juegosRoutes);
app.use('/api/resenas', resenasRoutes);

// Ruta de prueba raíz
app.get('/', (req, res) => {
  res.json({ 
    mensaje: 'API de GameTracker funcionando',
    version: '1.0.0',
    endpoints: {
      juegos: '/api/juegos',
      resenas: '/api/resenas'
    }
  });
});

// Ruta para health check
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ 
    mensaje: 'Ruta no encontrada',
    ruta: req.url
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error no manejado:', err);
  res.status(500).json({ 
    mensaje: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
});