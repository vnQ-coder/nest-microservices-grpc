import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { USERS_PACKAGE_NAME } from '../../../../types/proto/users';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USERS_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: USERS_PACKAGE_NAME,
          protoPath: join(__dirname, 'proto/users.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
