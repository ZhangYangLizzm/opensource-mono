import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ChartsService } from './charts.service';
import { chartNameSchema } from './dto/find-chart.dto';
import { Response } from 'express';

@Controller('charts')
export class ChartsController {
  constructor(private readonly chartsService: ChartsService) {}

  @Get(':name')
  findOne(@Param('name') name: string, @Res() res: Response) {
    return res.status(HttpStatus.OK).json({
      statuCode: HttpStatus.OK,
      content: this.chartsService.findOne(chartNameSchema.parse(name)),
      message: 'Success',
    });
  }
}
