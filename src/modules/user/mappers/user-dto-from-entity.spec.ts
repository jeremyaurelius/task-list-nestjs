import { UserEntity } from '../entities/user.entity';
import { userDtoFromEntity } from './user-dto-from-entity.mapper';

describe('userDtoFromEntity', () => {
  const userEntity: UserEntity = {
    userID: '34dc7c3c-9b6a-42a1-a740-8add632a2a22',
    username: 'jeremy',
    firstName: 'Jeremy',
    email: 'jeremy@example.com',
    password: '1235',
    adminType: 'admin',
  };

  it('should exclude password', () => {
    const dto = userDtoFromEntity(userEntity);
    expect((dto as any).password).toBeUndefined();
  });
});
