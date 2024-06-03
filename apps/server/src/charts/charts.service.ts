import { Injectable } from '@nestjs/common';
import { chartData } from './charts.mock';

@Injectable()
export class ChartsService {
  findOne(name: string) {
    return chartData[name];
  }
}
