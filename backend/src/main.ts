import { NestFactory } from '@nestjs/core';
import { appEnv } from 'src/configs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      credentials: true,
      origin: '*',
    },
  });
  await app.listen(appEnv.APP_PORT || 3000);
}
bootstrap();
