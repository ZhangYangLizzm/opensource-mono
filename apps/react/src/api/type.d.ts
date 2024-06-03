type IPromise<T = any> = Promise<{
  statusCode: number;
  content: T;
  message: string;
}>;
