import { Controller, Get } from '@nestjs/common'
import { LikesService } from './likes.service'

@Controller('likes')
export class LikesController {
  constructor(private likesService: LikesService) {}

  @Get('/getAllLikes')
  getAllLikes(): any {
    return this.likesService.getAllLikes()
  }
}
