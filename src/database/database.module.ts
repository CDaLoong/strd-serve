import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from 'src/users/users.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'DATA_MYSQL', // 适配多数据库情况
      type: 'mysql',
      host: '192.168.0.106',
      port: 3306,
      username: 'DaLoong',
      password: '66666688888888',
      database: 'STRD-MySQL',
      logging: true,
      entities: [Users],
      synchronize: false, // 自动同步实体和数据库表结构
    }),
  ],
  // providers: ['DATA_MYSQL'],
  // exports: ['DATA_MYSQL'], // 导出 Provider，以便其他模块可以使用
})
export class DatabaseModule {}
