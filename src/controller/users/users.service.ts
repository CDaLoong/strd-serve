import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from 'src/entity/users.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User, 'DATA_MYSQL')
    private usersRepository: Repository<User>,
  ) {}
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
