import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from 'src/users/users.entity'

@Entity('likes') // 通过 name 属性指定实体对应的数据库表名
export class Like {
  @PrimaryGeneratedColumn({ name: 'id' }) // 通过 name 属性指定列名
  id: number // 点赞ID

  @Column({ name: 'user_id' })
  user_id: number // 用户ID

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  created_at: Date // 创建时间

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updated_at: Date // 更新时间
}
