import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from 'src/entity/users.entity'
import { InjectRepository } from '@nestjs/typeorm'

// 实现业务逻辑，实现对数据库的增删改查
// @Injectable  Service 是可以被注入也是可以注入到别的对象的，所以用 @Injectable 声明
@Injectable()
export class UsersService implements OnModuleInit, OnApplicationBootstrap {
  constructor(
    @InjectRepository(User, 'DATA_MYSQL')
    private usersRepository: Repository<User>,
  ) {}

  onModuleInit() {
    console.log('Service OnModuleInit')
  }

  onApplicationBootstrap() {
    console.log('Service onApplicationBootstrap')
  }
  // 获取所有用户信息
  async getAllUser(): Promise<User[]> {
    return await this.usersRepository.find()
  }
  // 根据ID获取某位用户信息
  async getUserById(id: number): Promise<User | null> {
    return await this.usersRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id: id })
      .getOne()
  }
  // 根据用户nam获取某位用户信息
  async getUserByUsername(username: string): Promise<User | null> {
    return await this.usersRepository
      .createQueryBuilder('user')
      .where('user.username = :username', { username: username })
      .getOne()
  }
  // 添加用户
  async addUser(user: User): Promise<User> {
    return await this.usersRepository.save(user)
  }
  // 通过ID删除用户
  async delUserById(id: number): Promise<void> {
    await this.usersRepository.delete(id)
  }
}
