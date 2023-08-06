import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(username: string, pwd: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user?.password !== pwd) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    return {
      auth_token: await this.jwtService.signAsync(payload),
    };
  }
}
