# GameTracker Backend

API REST para gestionar una biblioteca personal de videojuegos.

## 🚀 Tecnologías

- Node.js
- Express
- MongoDB (Mongoose)
- dotenv
- cors

## 📦 Instalación
```bash
npm install
```

## ⚙️ Configuración

Crear archivo `.env`:
```
PORT=5000
MONGODB_URI=tu_connection_string_mongodb
```

## ▶️ Ejecutar
```bash
# Modo desarrollo (con nodemon)
npm run dev

# Modo producción
npm start
```

## 📍 Endpoints

### Juegos
- `GET /api/juegos` - Obtener todos los juegos
- `GET /api/juegos/:id` - Obtener un juego
- `POST /api/juegos` - Crear juego
- `PUT /api/juegos/:id` - Actualizar juego
- `DELETE /api/juegos/:id` - Eliminar juego

### Reseñas
- `GET /api/resenas` - Obtener todas las reseñas
- `GET /api/resenas/juego/:juegoId` - Obtener reseñas de un juego
- `POST /api/resenas` - Crear reseña
- `PUT /api/resenas/:id` - Actualizar reseña
- `DELETE /api/resenas/:id` - Eliminar reseña

## 👨‍💻 Autor

Proyecto final - Desarrollo Web