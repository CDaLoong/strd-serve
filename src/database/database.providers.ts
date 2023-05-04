import { DataSource } from 'typeorm'

export const DatabaseService = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '192.168.100.157',
        port: 3306,
        username: 'DaLoong',
        password: '66666688888888',
        // synchronize: true,
        database: 'STRD-MySQL',
        logging: true, // 启用日志记录
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      })
      return dataSource.initialize()
    },
  },
]
