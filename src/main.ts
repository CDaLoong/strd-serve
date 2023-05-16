import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import * as passport from 'passport'
import { Logger } from '@nestjs/common'
import { AllExceptionsFilter } from './common/error/global-exception.filter'
import { GlobalInterceptor } from './common/interceptor/global.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new GlobalInterceptor())
  app.use(passport.initialize())
  // 设置日志记录器（例如 Winston）
  app.useLogger(new Logger())
  app.useGlobalFilters(new AllExceptionsFilter())
  app.enableCors() // 启用 CORS
  await app.listen(9527)
}
bootstrap().then(() => {
  console.log('服务器创建成功，监听9527端口')
})
