import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes';
import authenticate from './middlewares/authenticate';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;
// Usa Morgan en entornos que no sean de producción
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.json({ message: 'Servidor Funcionando!! 🪐' });
})

app.get('/api/ruta-protegida', authenticate, (req, res) => {
    // Lógica para manejar la ruta protegida
    res.send('Esta es una ruta protegida');
});


if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo por el puerto: ${PORT}`);
    });
}


export default app;