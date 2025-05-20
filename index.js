const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');

// Hacer pública la carpeta "public"
app.use(express.static('public'));

// Middleware para leer datos de formularios
app.use(express.urlencoded({ extended: true }));

// -- RUTAS -- //

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Bienvenido a mi Sandbox' });
});

// Ruta (/about)
app.get('/about', (req, res) => {
  res.render('about', { titulo: 'Acerca de este sandbox' });
});

// Ruta (/projects)
app.get('/projects', (req, res) => {
  res.render('projects');
});

// Ruta (/contact)
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contacto' });
});

// Ruta para manejar el envío del formulario de contacto (POST)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Nuevo mensaje recibido:');
  console.log(`Nombre: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Mensaje: ${message}`);

  res.send('¡Gracias por tu mensaje!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
