import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super()
  }

  async validate(username: string, password: string): Promise<any> {
    console.log(2234, username, password)
    const user = await this.authService.validateUser(username, password)
    if (!user) {
      console.log(34559)
      throw new UnauthorizedException()
    }
    return user
  }
}
