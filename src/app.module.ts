import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { UsersModule } from './users/users.module'
import { ArticlesModule } from './articles/articles.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';

@Module({
  imports: [DatabaseModule, UsersModule, ArticlesModule, CommentsModule, LikesModule],
})
export class AppModule {}
