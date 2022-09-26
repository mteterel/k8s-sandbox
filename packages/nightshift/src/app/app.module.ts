import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TaskRunner } from './run.command';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [TaskRunner],
})
export class AppModule {}
