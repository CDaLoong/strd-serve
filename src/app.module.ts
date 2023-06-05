import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { APP_GUARD, APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core'
import { DatabaseModule } from './common/database/database.module'
import { UsersModule } from './controller/users/users.module'
import { ArticlesModule } from './controller/articles/articles.module'
import { CommentsModule } from './controller/comments/comments.module'
import { LikesModule } from './controller/likes/likes.module'
import { AuthModule } from './controller/auth/auth.module'
import { LoggerMiddleware } from './common/middleware/logger.middleware'
import { HttpExceptionFilter } from './common/error/http-exception.filter'
import { GlobalInterceptor } from './common/interceptor/global.interceptor'
import { JwtAuthGuard } from './controller/auth/auth.guard'
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
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude({ path: 'users/getAllUser', method: RequestMethod.GET }) // 排除使用中间件的路由
      .forRoutes('*')
  }
}
