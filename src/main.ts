import { NestFactory } from '@nestjs/core';
import { DestinationsModule } from './Destinations.module';

async function bootstrap() {
  const app = await NestFactory.create(DestinationsModule);
  await app.listen(3000);
}
bootstrap();
