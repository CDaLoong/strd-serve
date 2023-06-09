import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // 日志中间件
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.baseUrl + '接口调用')
    next()
  }
}
