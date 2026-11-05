// Carga las variables de entorno definidas en el archivo .env
require("dotenv").config();

// Importa Express para crear y gestionar el servidor
const express = require('express');

  // Importa las rutas relacionadas con las películas
const filmsRoutes = require("./routes/films.routes");

// Crea la aplicación de Express
const app = express();

// Obtiene el puerto del archivo .env; si no está definido, utiliza el 3000
const port = process.env.PORT || 3000;

// Middleware que permite recibir y procesar datos en formato JSON
app.use(express.json());

// Conectamos las rutas de películas a la aplicación utilizando el prefijo /api
app.use("/api", filmsRoutes);

// Comprueba si app.js se está ejecutando directamente
// Evita iniciar el servidor cuando Jest importa app.js para realizar los tests
if (require.main === module) {
  // Inicia el servidor y lo deja escuchando peticiones en el puerto configurado
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Necesario exportar app para que se puedan ejecutar los tests correctamente
module.exports = app;