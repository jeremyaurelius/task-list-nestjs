import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { bootstrapAppShared } from 'src/boostrap-app-shared';
import { AppModule } from 'src/app.module';
import { UserDto } from 'src/modules/user/dtos/user-dto';

describe('/users GET', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await bootstrapAppShared();
    await app.init();
  });

  it('gets users', async () => {
    const response = await request(app.getHttpServer())
      .get('/users')
      .expect(200);
    const users: UserDto[] = response.body;
    expect(users.length).toBeGreaterThan(0);
    users.forEach((u) => {
      expect(u.username).toBeDefined();
      expect('password' in u).toBe(false);
    });
  });
});
