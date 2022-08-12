import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { PrismaService } from '../../database/PrismaService.service';
import { AppModule } from './app.module';

const links = [
  'http://localhost:5173',
  'http://192.168.1.28:5173',
  'http://172.17.0.1:5173',
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({}));

  app.enableCors({
    origin: links,
  });

  const prismaService = app.get(PrismaService);

  await prismaService.enableShutdownHooks(app);

  await app.listen(3000);
}

bootstrap();
