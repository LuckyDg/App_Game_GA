import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createServer } from 'http';
import { initializeSocket } from "./socket";
import videojuegoRoutes from './routes/videojuegoRoutes';
import valoracionesRoutes from './routes/valoracionesRoutes';


dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 4000;
const server = createServer(app);
initializeSocket(server);
// const io = new Server(server);

// Configuraciones de middleware
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}
app.use(cors({
    origin: ['http://localhost:4200', 'http://localhost:12000'],
    credentials: true,
  }));
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'Servidor Funcionando!! 🦈' });
});

app.use('/api', videojuegoRoutes);
app.use('/api' , valoracionesRoutes);


// Escuchar en el servidor HTTP en lugar de la app de Express directamente
server.listen(PORT, () => {
    console.log(`Servidor corriendo por el puerto: ${PORT}`);
});

export default app;