import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { OverviewModule } from './overview/overview.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { GlobalExceptionFilter } from './filters/exception.filter';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './decorator/auth.guard';
import { ChartsModule } from './charts/charts.module';

@Module({
  imports: [OverviewModule, AuthModule, ChartsModule],
  controllers: [],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
