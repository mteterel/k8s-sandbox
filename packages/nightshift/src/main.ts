/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { CommandFactory } from 'nest-commander';

import { AppModule } from './app/app.module';

async function bootstrap() {
  console.log("nightshift v0.0.1");
  await CommandFactory.run(AppModule, ['warn', 'error']);
}

bootstrap();
