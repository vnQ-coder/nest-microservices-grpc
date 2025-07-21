import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  GetProfileRequest,
  UserResponse,
  UserServiceController,
  UserServiceControllerMethods,
  LoginResponse,
  LoginRequest,
  RegisterRequest,
} from 'types/proto/users';

@Controller('users')
@UserServiceControllerMethods()
export class UsersController implements UserServiceController {
  register(request: RegisterRequest): Observable<UserResponse> | any {
    return {
      userId: 'string',
      email: 'string',
      name: 'string',
    };
  }

  getProfile(
    request: GetProfileRequest
  ): Promise<UserResponse> | Observable<UserResponse> | UserResponse {
    return {
      userId: 'string',
      email: 'string',
      name: 'string',
    };
  }

  login(request: LoginRequest): Observable<LoginResponse> | any {
    return {
      accessToken: 'string',
      user: {
        userId: 'string',
        email: 'string',
        name: 'string',
      },
    };
  }
}
