import { Response, Request, NextFunction } from 'express';
import ErrorCode from '../error-hander/error-code';
import { ErrorException } from '../error-hander/error-exception';
import { verifyAuthToken } from './jwt';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token && token.startsWith('Bearer')) {
    try {
      const tokenData = verifyAuthToken(token);
      req.body.tokenData = tokenData;
      next();
    } catch (error) {
      throw new ErrorException(ErrorCode.UNAUTHENTICATED);
    }
  } else {
    throw new ErrorException(ErrorCode.UNAUTHENTICATED);
  }
};
