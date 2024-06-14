import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  email: string;

  @Expose()
  userID: string;

  @Expose()
  username: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName?: string;

  @Expose()
  adminType?: 'admin';
}
