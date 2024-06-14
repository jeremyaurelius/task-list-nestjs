import { Injectable } from '@nestjs/common';
import { userDtoFromEntity } from '../mappers/user-dto-from-entity.mapper';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(userID: string) {
    const userEntity = await this.userRepository.findOne(userID);
    return userDtoFromEntity(userEntity);
  }

  async findByUsername(username: string) {
    const userEntity = await this.userRepository.findByUsername(username);
    return userDtoFromEntity(userEntity);
  }

  async findAll() {
    const userEntities = await this.userRepository.findAll();
    return userEntities.map((u) => userDtoFromEntity(u));
  }
}
