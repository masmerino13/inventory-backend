import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(username: string, pwd: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);

    if (!user) {
      throw new ForbiddenException();
    }

    const match = await this.comparePassword(pwd, user?.password);

    console.log('- p', pwd, match);

    if (!match) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
    };

    return {
      name: user.name,
      role: user.role,
      auth_token: await this.jwtService.signAsync(payload),
    };
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);

    return match;
  }
}
