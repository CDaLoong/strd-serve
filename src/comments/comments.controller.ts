import { Controller, Get } from '@nestjs/common'
import { CommentsService } from './comments.service'

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get('/getAllComments')
  getAllComments(): any {
    return this.commentsService.getAllComments()
  }
}
