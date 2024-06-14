import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { TEST_USERS } from 'test/data/test-users';

@Injectable()
export class UserRepository {
  // TODO: replace with DB
  usersEntities: UserEntity[] = TEST_USERS;

  async findOne(userID: string) {
    return this.usersEntities.find((u) => u.userID === userID);
  }

  async findByUsername(username: string) {
    return this.usersEntities.find((u) => u.username === username);
  }

  async findAll() {
    return this.usersEntities;
  }
}
