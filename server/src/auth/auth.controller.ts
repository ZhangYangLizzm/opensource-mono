import {
  Body,
  Controller,
  Post,
  Get,
  Request,
  Res,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { Public } from 'src/decorator/public.decorator';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  async signIn(@Body() signInDto: SignInDto, @Res() res: Response) {
    const token = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );
    return res.status(200).json({
      statusCode: 200,
      message: 'success',
      content: token,
    });
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
