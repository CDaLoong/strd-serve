import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/entity/users.entity'
import { Comment } from 'src/entity/comments.entity'
import { Article, ArticleType } from 'src/entity/articles.entity'
import { Like } from 'src/entity/likes.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'DATA_MYSQL', // 适配多数据库情况
      type: 'mysql',
      host: '192.168.3.62',
      port: 3306,
      username: 'DaLoong',
      password: '66666688888888',
      database: 'STRD-MySQL',
      logging: true,
      entities: [User, Comment, Article, ArticleType, Like],
      synchronize: true, // 自动同步实体和数据库表结构
    }),
  ],
})
export class DatabaseModule {}
