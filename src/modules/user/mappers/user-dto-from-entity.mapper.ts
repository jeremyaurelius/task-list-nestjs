import { plainToInstance } from 'class-transformer';
import { UserDto } from '../dtos/user-dto';
import { UserEntity } from '../entities/user.entity';

/**
 * Converts UserEntity to UserDto
 */
export const userDtoFromEntity = (userEntity: UserEntity) =>
  plainToInstance(UserDto, userEntity, { excludeExtraneousValues: true });
