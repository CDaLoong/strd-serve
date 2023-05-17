import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Param,
  UseGuards,
  HttpStatus,
  HttpException,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from 'src/entity/users.entity'
import * as bcrypt from 'bcrypt'
// import { LocalAuthGuard } from '../auth/local-auth.guard'
// import { GetUserByIdParames } from './users.dto'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/getAllUser')
  async getAllUser(): Promise<object[]> {
    const users = await this.usersService.getAllUser()
    if (!users) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }
    const result = users.map((user) => {
      const { password, ...result } = user
      return result
    })
    return result
  }
  // 根据id获取用户
  @Get('/getUserById')
  async getUserById(@Query('id', ParseIntPipe) id: number): Promise<object> {
    const user = await this.usersService.getUserById(id)
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: '没有找到该用户，请核对用户ID是否正确！',
        },
        HttpStatus.FORBIDDEN,
      )
    }
    const { password, ...result } = user
    return result
  }
  // 根据id获取用户
  @Get('/getUserByUsername')
  async getUserByUsername(
    @Query('username', ValidationPipe) username: string,
  ): Promise<object> {
    const user = await this.usersService.getUserByUsername(username)
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: '没有找到该用户，请核对用户名是否正确！',
        },
        HttpStatus.FORBIDDEN,
      )
    }
    const { password, ...result } = user
    return result
  }
  // 添加用户
  @Post('/addUser')
  async addUser(@Body() body: any): Promise<object> {
    const checkUserName = await this.usersService.getUserByUsername(
      body.username,
    )
    if (checkUserName !== null)
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: '该用户名已存在！',
        },
        HttpStatus.FORBIDDEN,
      )
    const user = new User()
    user.name = body.name
    user.username = body.username
    user.gender = body.gender
    user.password = await this.hashPassword(body.password)
    user.birthday = body.birthday
    user.age = 18
    user.mobile = body.mobile
    user.email = body.email
    const { password, ...result } = await this.usersService.addUser(user)
    return result
  }
  // 通过ID删除用户
  @Post('/delUserById')
  async delUserById(@Body() body: any): Promise<void> {
    const id = Number.parseInt(body.id)
    return await this.usersService.delUserById(id)
  }

  // 密码加密
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hashSync(password, 10)
  }
}
