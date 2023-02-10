import { Request, Response, NextFunction } from 'express';

import { ErrorException } from './error-exception';
import ErrorCode from './error-code';
import { ErrorModel } from './error-model';

export const errorHander = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ErrorException) {
    res.status(err.status).send(err);
  } else {
    res.status(500).json({ code: ErrorCode.SERVER_ERROR, status: 500 } as ErrorModel);
  }
};
