import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY ?? 'your_secret_key';

export const generateToken = (user: object) => {
  return jwt.sign(user, SECRET_KEY, { expiresIn: '10h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};
