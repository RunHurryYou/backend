import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email_or_phone' });
  }

  async validate(email_or_phone: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email_or_phone, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}