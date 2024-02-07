// Middleware authenticate ajustado
import { Request, Response, NextFunction } from 'express';
import * as tokenUtils from '../utils/token';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.sendStatus(401);
        }

        const decoded = tokenUtils.verifyToken(token);
        
        (req as any).user = decoded;

        next();
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';
        return res.status(403).send(`Authentication failed: ${errorMessage}`);
    }
};

export default authenticate;
