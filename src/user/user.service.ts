import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  // 该模块使用 forFeature() 方法来定义在当前范围内注册的存储库。有了这个，我们可以使用 @InjectRepository() 装饰器将 UsersRepository 注入到 UsersService
}
