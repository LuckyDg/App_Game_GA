import { Router } from 'express';
import { createVideojuegoController, deleteVideojuegoController, getAllVideojuegosController, getVideojuegoByIdController, updateVideojuegoController} from '../controllers/videojuegoController';

const router = Router();

router.get('/videojuegos', getAllVideojuegosController);
router.get('/videojuegos/:id', getVideojuegoByIdController);
router.post('/videojuegos', createVideojuegoController);
router.put('/videojuegos/:id', updateVideojuegoController);
router.delete('/videojuegos/:id', deleteVideojuegoController);

export default router;