export class CustomError extends Error {
  public message: string;
  public data?: any;

  constructor(params: { message: string; data?: any }) {
    super(params.message);
    this.message = params.message;
    this.data = params.data;
  }
}
