import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from '../repositories/user.repository';
import { TEST_USERS } from 'test/data/test-users';
import { createMockInstance } from 'test/utils/create-mock-instance';

describe('UserService', () => {
  let userService: UserService;
  let userRepositoryMock: UserRepository;

  beforeEach(async () => {
    userRepositoryMock = createMockInstance(UserRepository);
    const app: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: userRepositoryMock,
        },
      ],
    }).compile();

    userService = app.get(UserService);
  });

  describe('findOne', () => {
    it('should return user', async () => {
      const testUser = TEST_USERS[0];
      jest.spyOn(userRepositoryMock, 'findOne').mockResolvedValue(testUser);
      const user = await userService.findOne(testUser.userID);
      expect(user.username).toBe('jeremy');
      expect('password' in user).toBe(false);
    });
  });

  describe('findByUsername', () => {
    it('should return user', async () => {
      const testUser = TEST_USERS[0];
      jest
        .spyOn(userRepositoryMock, 'findByUsername')
        .mockResolvedValue(testUser);
      const user = await userService.findByUsername('jeremy');
      expect(user.username).toBe('jeremy');
      expect('password' in user).toBe(false);
    });
  });

  describe('findAll', () => {
    it('should return users', async () => {
      jest.spyOn(userRepositoryMock, 'findAll').mockResolvedValue(TEST_USERS);
      const users = await userService.findAll();
      users.forEach((user) => {
        expect(user.username).toBeDefined();
        expect('password' in user).toBe(false);
      });
    });
  });
});
