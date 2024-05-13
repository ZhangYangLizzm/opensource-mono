interface ServerResponse<T = unknown> {
  statusCode: number;
  message: string;
  data?: T;
}
