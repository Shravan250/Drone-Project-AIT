import jwt from 'jsonwebtoken';
import { Client } from '../models/user.model';
import errResponse from '../utils/errResponse';

export const authMiddleware = async (req: any, res: any, next: any) => {
  try {
    // Extract token from cookies
    const { token } = req.cookies;
    console.log('Token:', token); // Debugging

    if (!token) {
      throw new errResponse('Unauthenticated', 400);
    }

    // Verify JWT_SECRET is defined
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in the environment variables');
    }

    // Verify the token
    const decoded: any = jwt.verify(token, JWT_SECRET);
    console.log('Decoded Token:', decoded); // Debugging

    const { _id } = decoded;

    if (!_id) {
      throw new errResponse('Unauthenticated', 400);
    }

    // Find the user by ID
    const client = await Client.findById(_id).select('+role');
    console.log('Client:', client); // Debugging

    if (!client) {
      throw new errResponse('User not found', 400);
    }

    // Attach the user to the request object
    req.user = client;
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error); // Debugging
    next(error);
  }
};
