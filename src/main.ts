import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import * as passport from 'passport'
import { Logger } from '@nestjs/common'
import rateLimit from 'express-rate-limit'
import * as session from 'express-session'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AllExceptionsFilter } from './common/error/global-exception.filter'
import { jwtConstants } from './controller/auth/constants'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.set('trust proxy', 1)
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  )
  app.use(
    session({
      secret: jwtConstants.secret,
      resave: false,
      saveUninitialized: true,
    }),
  )
  app.useGlobalPipes(new ValidationPipe())
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
