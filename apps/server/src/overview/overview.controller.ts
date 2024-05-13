import { Controller, Get, Query } from '@nestjs/common';
import { RowCardItem } from 'src/types/overview';
import { errorRes, successRes } from 'src/utils/response';
import { z } from 'zod';
import { OverviewService } from './overview.service';

@Controller('overview')
export class OverviewController {
  constructor(private readonly overviewService: OverviewService) {}

  @Get()
  overview(): ServerResponse<RowCardItem[]> {
    return successRes(this.overviewService.getOverview());
  }

  @Get('info')
  getItem(@Query('id') id: string): ServerResponse<{
    xAxis: Array<string>;
    yAxis: Array<number>;
  }> {
    const idSchema = z.string();
    try {
      const _id = idSchema.parse(id);
      return successRes(this.overviewService.getItem(_id));
    } catch {
      return errorRes('id is required');
    }
  }
}
