import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Comment } from './comments.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment, 'DATA_MYSQL')
    private commentsRepository: Repository<Comment>,
  ) {}
  getAllComments(): Promise<Comment[]> {
    return this.commentsRepository.find()
  }
}
