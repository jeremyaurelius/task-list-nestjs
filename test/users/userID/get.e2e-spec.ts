import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { bootstrapAppShared } from 'src/boostrap-app-shared';
import { AppModule } from 'src/app.module';
import { UserDto } from 'src/modules/user/dtos/user-dto';
import { TEST_USERS } from 'test/data/test-users';

describe('/users/:userID GET', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await bootstrapAppShared();
    await app.init();
  });

  it('gets user', async () => {
    const response = await request(app.getHttpServer())
      .get(`/users/${TEST_USERS[0].userID}`)
      .expect(200);
    const user: UserDto = response.body;
    expect(user.username).toBeDefined();
    expect('password' in user).toBe(false);
  });
});
