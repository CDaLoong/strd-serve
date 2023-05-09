import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './users.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User, 'DATA_MYSQL')
    private usersRepository: Repository<User>,
  ) {}
  getAllUser(): Promise<User[]> {
    return this.usersRepository.find()
  }
}
