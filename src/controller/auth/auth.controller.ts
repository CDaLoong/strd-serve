import {
  Controller,
  Get,
  Body,
  Request,
  Req,
  Res,
  Post,
  UseGuards,
  BadRequestException,
} from '@nestjs/common'
import { Response } from 'express'
import * as svgCaptcha from 'svg-captcha'
import { LocalAuthGuard } from './auth.guard'
import { AuthService } from './auth.service'
import { SkipAuth } from 'src/common//decorator/skipAuth'

@Controller('auth')
export class AuthController {
  private charPool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' // 自定义验证码字符集，包括字母和数字，不区分大小写
  constructor(private authService: AuthService) {}

  @SkipAuth()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {
    const captcha = req.body.captcha // 假设验证码位于请求的 body 中的 `captcha` 字段
    const expectedCaptcha = req.session.captcha // 获取之前生成的验证码
    console.log(captcha, expectedCaptcha)
    if (captcha.toLowerCase() !== expectedCaptcha.toLowerCase())
      throw new BadRequestException('验证码错了')
    return this.authService.login(req.user)
  }

  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user
  }

  // 获取验证码图片
  @SkipAuth()
  @Get('captcha')
  async getCaptcha(@Req() req: any, @Res() res: Response) {
    const captcha = svgCaptcha.create({
      charPreset: this.charPool,
      ignoreChars: '0o1i', // 忽略字符 0、o、1、i
      noise: 3, // 设置干扰线数量为 3
      color: true, // 使用随机颜色
    })
    req.session.captcha = captcha.text // 将验证码存储在会话中，用于后续校验
    res.type('svg').send(captcha.data) // 将生成的 SVG 图像发送给客户端
  }
}
