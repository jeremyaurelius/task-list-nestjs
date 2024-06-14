import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  // TODO: replace with DB
  usersEntities: UserEntity[] = [
    {
      userID: '34dc7c3c-9b6a-42a1-a740-8add632a2a22',
      username: 'jeremy',
      firstName: 'Jeremy',
      email: 'jeremy@example.com',
      password: '1235',
      adminType: 'admin',
    },
    {
      userID: '6fecd063-5ba4-4db5-bbc1-5c5a3476f1fe',
      username: 'callum',
      firstName: 'Callum',
      email: 'callum@example.com',
      password: 'abcd',
    },
  ];

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
