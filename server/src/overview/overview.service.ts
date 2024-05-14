import { Injectable, NotFoundException } from '@nestjs/common';
import { OverviewInfo, OverviewItemInfo } from './overview.mock';
import { OverviewItemInterface } from './interfaces/overview.interface';

@Injectable()
export class OverviewService {
  getOverview(): OverviewItemInterface[] {
    return OverviewInfo;
  }

  getItem(id: number) {
    const item = OverviewItemInfo.find((item) => item.id === id);
    if (!item) {
      throw new NotFoundException('Id is not found');
    }
    return item;
  }
}
