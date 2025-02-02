import jwt from 'jsonwebtoken';
import { Client } from '../models/user.model';
import errResponse from '../utils/errResponse';

export const authMiddleware = async (req: any, res: any, next: any) => {
  try {
    // Extract token from the Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new errResponse('Unauthenticated: No token provided', 401);
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      throw new errResponse('Unauthenticated: Invalid token format', 401);
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in the environment variables');
    }

    const decoded: any = jwt.verify(token, JWT_SECRET);

    const { _id } = decoded;

    if (!_id) {
      throw new errResponse('Unauthenticated: Invalid token payload', 401);
    }

    // Find the user by ID
    const client = await Client.findById(_id).select('+role');

    if (!client) {
      throw new errResponse('User not found', 404);
    }

    req.user = client;
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error); // Debugging
    next(error);
  }
};
