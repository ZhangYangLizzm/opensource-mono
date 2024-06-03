import {
  OverviewItemInfoInterface,
  OverviewInfoInterface,
} from './interfaces/overview.interface';

export const OverviewInfo: OverviewInfoInterface = [
  {
    id: 0,
    name: 'visits',
    value: 102400,
  },
  {
    id: 1,
    name: 'enquiries',
    value: 81212,
  },
  {
    id: 2,
    name: 'orders',
    value: 9280,
  },
  {
    id: 3,
    name: 'views',
    value: 213540,
  },
];

export const OverviewItemInfo: OverviewItemInfoInterface[] = [
  {
    id: 0,
    xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yAxis: [150, 230, 224, 218, 135, 147, 260],
  },
  {
    id: 1,
    xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yAxis: [80, 110, 90, 120, 70, 100, 85],
  },
  {
    id: 2,
    xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yAxis: [30, 45, 40, 50, 35, 60, 55],
  },
  {
    id: 3,
    xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yAxis: [20000, 22000, 21000, 23000, 19000, 25000, 24000],
  },
];
