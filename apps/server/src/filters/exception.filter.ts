import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ZodError } from 'zod';
import { Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception instanceof ZodError) {
      response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Validation error',
        errors: exception.errors,
      });
    } else {
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
      response.status(HttpStatus.OK).json({
        statusCode: status,
        message: exception.message,
        stack:
          process.env.NODE_ENV === 'production' ? undefined : exception.stack,
      });
    }
  }
}
