import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByUsername(username)
    if (user && (await this.comparePasswords(password, user.password))) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  // 生成token
  async login(user: any) {
    const payload = { username: user.username, sub: user.id }
    return {
      username: user.username,
      access_token: this.jwtService.sign(payload),
    }
  }

  // 密码加密
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hashSync(password, 10)
  }

  // 校验密码
  async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword)
  }
}
