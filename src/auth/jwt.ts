import jwt from 'jsonwebtoken';
import ErrorCode from '../error-hander/error-code';
import { ErrorException } from '../error-hander/error-exception';

export const generateAuthToken = (user: Object): string => {
  try {
    return jwt.sign(user, process.env.JWT_KEY, { expiresIn: '24h' });
  } catch (error) {
    throw error;
  }
};
export const verifyAuthToken = (token: string): { _id: string; email: string } => {
  try {
    const dataToken = jwt.verify(token, process.env.JWT_KEY);
    return dataToken as { _id: string; email: string };
  } catch (error) {
    throw new ErrorException(ErrorCode.UNAUTHENTICATED);
  }
};
