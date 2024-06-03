import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { z } from 'zod';
import { OverviewService } from './overview.service';
import { Response } from 'express';

@Controller('overview')
export class OverviewController {
  constructor(private readonly overviewService: OverviewService) {}

  @Get()
  overview(@Res() res: Response) {
    const data = this.overviewService.getOverview();
    // 返回成功数据
    return res.status(HttpStatus.OK).json({
      message: 'success',
      content: data,
      statusCode: HttpStatus.OK,
    });
  }

  @Get(':id')
  getItem(@Query('id') id: string, @Res() res: Response) {
    const idSchema = z.number();
    const _id = idSchema.parse(Number(id));
    const data = this.overviewService.getItem(_id);
    return res.status(HttpStatus.OK).json({
      message: 'success',
      content: data,
      statusCode: HttpStatus.OK,
    });
  }
}
