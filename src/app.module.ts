import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common'
import { APP_PIPE, APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core'
import { DatabaseModule } from './common/database/database.module'
import { UsersModule } from './controller/users/users.module'
import { ArticlesModule } from './controller/articles/articles.module'
import { CommentsModule } from './controller/comments/comments.module'
import { LikesModule } from './controller/likes/likes.module'
import { AuthModule } from './controller/auth/auth.module'
import { LoggerMiddleware } from './common/middleware/logger.middleware'
import { HttpExceptionFilter } from './common/error/http-exception.filter'
import { GlobalInterceptor } from './common/interceptor/global.interceptor'
@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UsersModule,
    ArticlesModule,
    CommentsModule,
    LikesModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: GlobalInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude({ path: 'users/getAllUser', method: RequestMethod.GET })
      .forRoutes('users', 'articles')
  }
}
