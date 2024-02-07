import { Request, Response } from 'express';
import * as tokenUtil from '../utils/token';
import { User } from '../models/user.model';

const users: { [key: string]: User } = {

    "user@example.com": {
        username: "pablo",
        password: "password123",
        role: "user",
    },
    "user1@example.com": {
        username: "camila",
        password: "password123",
        role: "user",
    },
    "admin@example.com": {
        username: "pedro",
        password: "admin123",
        role: "admin",
    },
    "admin1@example.com": {
        username: "samuel",
        password: "admin123",
        role: "admin",
    },

};

export const login = (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = users[email];

    if (user && user.password === password) {
        const token = tokenUtil.generateToken({
            email,
            username: user.username,
            role: user.role,
        });

        res.json({ token });
    } else {
        res.status(401).send("Usuario no Autorizado");
    }
};
