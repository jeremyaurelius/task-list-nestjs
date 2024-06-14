import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from '../repositories/user.repository';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [UserService, UserRepository],
    }).compile();

    userService = app.get(UserService);
  });

  describe('findOne', () => {
    it('should return user', async () => {
      const user = await userService.findOne(
        '34dc7c3c-9b6a-42a1-a740-8add632a2a22',
      );
      expect(user.username).toBe('jeremy');
      expect('password' in user).toBe(false);
    });
  });

  describe('findByUsername', () => {
    it('should return user', async () => {
      const user = await userService.findByUsername('jeremy');
      expect(user.username).toBe('jeremy');
      expect('password' in user).toBe(false);
    });
  });

  describe('findAll', () => {
    it('should return users', async () => {
      const users = await userService.findAll();
      users.forEach((user) => {
        expect(user.username).toBeDefined();
        expect('password' in user).toBe(false);
      });
    });
  });
});
