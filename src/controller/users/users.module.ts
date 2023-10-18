import { Module, OnModuleInit, OnApplicationBootstrap } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { User } from 'src/entity/users.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User], 'DATA_MYSQL')],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('module OnModuleInit')
  }

  onApplicationBootstrap() {
    console.log('module onApplicationBootstrap')
  }
}
