import { Module } from '@nestjs/common'
import { LikesService } from './likes.service'
import { LikesController } from './likes.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Like } from 'src/entity/likes.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Like], 'DATA_MYSQL')],
  providers: [LikesService],
  controllers: [LikesController],
})
export class LikesModule {}
