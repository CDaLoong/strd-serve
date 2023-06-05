import { Strategy as StrategyLocal } from 'passport-local'
import { ExtractJwt, Strategy as StrategyJwt } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'
import { jwtConstants } from './constants'

// 本地策略
@Injectable()
export class LocalStrategy extends PassportStrategy(StrategyLocal) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'username',
      passwordField: 'password',
    })
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}

// Jwt策略
@Injectable()
export class JwtStrategy extends PassportStrategy(StrategyJwt) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    })
  }

  async validate(payload: any) {
    return { username: payload.username }
  }
}
