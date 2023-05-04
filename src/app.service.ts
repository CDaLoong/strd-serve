import { Injectable } from '@nestjs/common'

// 提供数据处理方法
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }
}
