import { Controller, Get, Post, Body, Header } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('get_all_user')
  async getHello(): Promise<object> {
    const data = {
      code: 0,
      msg: '',
      // data: await this.userService.findAll(),
    }
    return data
  }

  @Post('delete_user')
  @Header('Cache-Control', 'none')
  async deleteUser(@Body() params): Promise<object> {
    console.log(params)
    // await this.userService.remove(params.id)
    return {
      code: 0,
      msg: '删除成功',
    }
  }
}
