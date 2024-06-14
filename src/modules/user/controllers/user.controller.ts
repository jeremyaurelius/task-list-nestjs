import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':userID')
  findOne(@Param('userID', new ParseUUIDPipe()) userID: string) {
    return this.userService.findOne(userID);
  }

  @Get('username/:username')
  findByUsername(@Param('username') username: string) {
    return this.userService.findByUsername(username);
  }
}
