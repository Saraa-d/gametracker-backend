# GameTracker Backend

API REST para gestionar una biblioteca personal de videojuegos.

## Tecnologías

- Node.js
- Express
- MongoDB (Mongoose)
- dotenv
- cors

## 📦 Instalación
```bash
npm install
```

## Configuración

Crear archivo `.env`:
```
PORT=5000
MONGODB_URI=tu_connection_string_mongodb
```

## Ejecutar
```bash
# Modo desarrollo (con nodemon)
npm run dev

# Modo producción
npm start
```

## Endpoints

### Juegos

#### GET /api/juegos
Obtiene todos los juegos de la biblioteca.

**Response:**
```json
[
  {
    "_id": "673e8f2a1234567890abcdef",
    "titulo": "The Legend of Zelda",
    "plataforma": "Nintendo Switch",
    "estado": "completado",
    "puntuacion": 5,
    "horasJugadas": 120
  }
]
```

#### GET /api/juegos/:id
Obtiene un juego específico por ID.

#### POST /api/juegos
Crea un nuevo juego.

**Body:**
```json
{
  "titulo": "Elden Ring",
  "plataforma": "PC",
  "genero": "RPG",
  "estado": "jugando",
  "puntuacion": 5,
  "horasJugadas": 45
}
```

#### PUT /api/juegos/:id
Actualiza un juego existente.

#### DELETE /api/juegos/:id
Elimina un juego.

### Reseñas

#### GET /api/resenas
Obtiene todas las reseñas.

#### GET /api/resenas/juego/:juegoId
Obtiene las reseñas de un juego específico.

#### POST /api/resenas
Crea una nueva reseña.

**Body:**
```json
{
  "juegoId": "673e8f2a1234567890abcdef",
  "titulo": "Obra maestra",
  "contenido": "Excelente juego...",
  "puntuacion": 5
}
```

#### PUT /api/resenas/:id
Actualiza una reseña existente.

#### DELETE /api/resenas/:id
Elimina una reseña.

## Variables de Entorno

- `PORT`: Puerto del servidor (default: 5000)
- `MONGODB_URI`: Connection string de MongoDB Atlas

## Deploy

El backend está desplegado en Render:
https://gametracker-backend-xxxx.onrender.com

## Autor

Proyecto final - Desarrollo Web Full Stack