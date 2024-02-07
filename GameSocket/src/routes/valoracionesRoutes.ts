import { Router } from 'express';
import { addValoracion, getValoraciones } from '../controllers/valoracionesController';

const router = Router();

router.get('/valoraciones/:videojuegoId', getValoraciones);
router.post('/valoraciones', addValoracion);

export default router;