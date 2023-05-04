import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm'
// 使用 TypeORM 订阅者，您可以监听特定的实体事件
@EventSubscriber()
export class UserSubscriber {}
