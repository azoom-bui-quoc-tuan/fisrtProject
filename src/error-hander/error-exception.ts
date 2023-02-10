import ErrorCode from './error-code';
export class ErrorException extends Error {
  public status: number = NaN;
  public name: string;
  public metaData: any = null;

  constructor(code: string = ErrorCode.SERVER_ERROR, metaData: any = {}) {
    super();
    this.metaData = metaData;
    this.name = code || ErrorCode.SERVER_ERROR;
    switch (code) {
      case ErrorCode.FORBIDDEN:
        this.status = 403;
        break;
      case ErrorCode.NOT_FOUND:
        this.status = 404;
        break;
      case ErrorCode.UNAUTHENTICATED:
        this.status = 401;
        break;
      default:
        this.status = 500;
        break;
    }
  }
}
