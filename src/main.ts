import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(9527)
}
bootstrap().then(() => {
  console.log('服务器创建成功，监听9527端口')
})
