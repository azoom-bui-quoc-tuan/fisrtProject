import express, { NextFunction } from 'express';
import { Request, Response } from 'express';
import { nextTick } from 'process';
import { errorHander } from './error-hander/error-hander';
import { ErrorException } from './error-hander/error-exception';
import ErrorCode from './error-hander/error-code';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello');
});

app.get('/error', (req: Request, res: Response, next: NextFunction) => {
  const error = new ErrorException();
  // const error = new Error()
  next(error);
});

app.use(errorHander);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
