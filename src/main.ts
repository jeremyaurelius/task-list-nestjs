import { bootstrapAppShared } from './boostrap-app-shared';

async function bootstrap() {
  const app = await bootstrapAppShared();
  await app.listen(3000);
}

bootstrap();
