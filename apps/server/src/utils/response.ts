export enum StatusCodes {
  OK = 200,
  ERROR = 500,
}

export const successRes = <T = unknown>(data: T) => {
  return {
    statusCode: StatusCodes.OK,
    message: 'success',
    data,
  };
};

export const errorRes = (message: string) => {
  return {
    statusCode: StatusCodes.ERROR,
    message,
  };
};
