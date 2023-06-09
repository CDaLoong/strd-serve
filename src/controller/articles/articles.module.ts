import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ArticlesController } from './articles.controller'
import { ArticlesService } from './articles.service'
import { Article, ArticleType } from 'src/entity/articles.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Article, ArticleType], 'DATA_MYSQL')],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
