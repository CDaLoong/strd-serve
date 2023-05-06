import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Users } from './users.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users, 'DATA_MYSQL')
    private usersRepository: Repository<Users>,
  ) {}
  getAllUser(): Promise<Users[]> {
    return this.usersRepository.find()
  }
}
