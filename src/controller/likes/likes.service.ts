import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Like } from 'src/entity/likes.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like, 'DATA_MYSQL')
    private likesRepository: Repository<Like>,
  ) {}
  getAllLikes(): Promise<Like[]> {
    return this.likesRepository.find()
  }
}
