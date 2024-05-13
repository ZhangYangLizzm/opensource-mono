import { Injectable } from '@nestjs/common';
import { RowCardItems, messages } from 'src/mock/overview.mock';
import { RowCardItem } from 'src/types/overview';

@Injectable()
export class OverviewService {
  getOverview(): RowCardItem[] {
    return RowCardItems;
  }

  getItem(id: string) {
    return messages;
  }
}
