import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function bootstrapAppShared() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // this strips extraneous properties that are not present in the DTO from the body of the request
      // this reinforces security by not allowing users to pass in sensitive properties, e.g. admin: true
      whitelist: true,
    }),
  );
  return app;
}
