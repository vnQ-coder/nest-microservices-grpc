import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  USER_SERVICE_NAME,
  USERS_PACKAGE_NAME,
  UserServiceClient,
} from 'types/proto/users';

@Controller('users')
export class UsersController implements OnModuleInit {
  private usersService: UserServiceClient;
  constructor(@Inject(USERS_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.usersService =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  @Get()
  findOne() {
    return this.usersService.getProfile({ userId: '1' });
  }
}
