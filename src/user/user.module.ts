import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { UserSubscriber } from './user.subscriber'

@Module({
  // 该模块使用 forFeature() 方法来定义在当前范围内注册的存储库。有了这些，我们可以使用 @InjectRepository() 装饰器将 UsersRepository 注入到 UsersService 中
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserSubscriber],
})
export class UserModule {}
